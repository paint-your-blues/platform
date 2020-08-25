from django.shortcuts import render
from django.db import transaction
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.fields.files import ImageFieldFile
from .models import Gallery
import requests
import threading
import random
import json


class ExtendedEncoder(DjangoJSONEncoder):
    def default(self, o):
        if isinstance(o, ImageFieldFile):
            return str(o)
        else:
            return super().default(o)


def GalleryJSON(req):
    entries = (list(Gallery.objects.exclude(entry_id="0").order_by('-likes')))
    gallery = []
    for index, val in enumerate(entries):
        gallery.append({
            "standing": index,
            "profile": val.profile_pic.url,
            "thumbnail": val.thumbnail.url,
            "insta_id": val.insta_id,
            "post": val.post,
            "entry_id": val.entry_id,
            "caption": val.caption,
            "likes": val.likes,
            "submission": val.submission
        })
    random.shuffle(gallery)
    return JsonResponse({'gallery': gallery}, encoder=ExtendedEncoder)


# Create your views here.
def EntryPageView(req):
    return render(req, 'gallery/entry.html')


def updateTheDB():
    cursor = ""
    entries = {}
    while True:
        n = 0
        data = requests.get(
            'https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=39236369448&first=50&after='
            + cursor)
        data = data.json()

        for detail in data['data']['user']['edge_owner_to_timeline_media'][
                'edges']:
            detail = detail['node']
            try:
                caption = detail['edge_media_to_caption']['edges'][0]['node'][
                    'text'][:10]
            except:
                caption = ""
            likes = detail['edge_media_preview_like']['count']
            entries[caption] = likes

        pointer = data['data']['user']['edge_owner_to_timeline_media'][
            'page_info']
        if (pointer['has_next_page']):
            cursor = pointer['end_cursor']
        else:
            break

    with transaction.atomic():
        for entry, likes in entries.items():
            Gallery.objects.filter(entry_id=entry).update(likes=likes)


def LeaderBoardView(req):
    # updateTheDB()
    gallery = Gallery.objects.all().order_by('-likes')[:20]
    # t1 = threading.Thread(target=updateTheDB)
    # t1.start()
    context = {'leaderboard': gallery}
    return render(req, 'gallery/leaderboard.html', context)
