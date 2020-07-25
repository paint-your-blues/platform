from django.shortcuts import render
from django.db import transaction
from .models import Gallery
import requests
import threading
import random


# Create your views here.
def EntryPageView(req):
    gallery = (list(Gallery.objects.all()))
    random.shuffle(gallery)
    context = {'leaderboard': gallery}
    return render(req, 'gallery/entry.html', context)


def updateTheDB():
    cursor=""
    entries={}
    while True:
        n=0
        data = requests.get('https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=39236369448&first=50&after='+cursor)
        data = data.json()

        for detail in data['data']['user']['edge_owner_to_timeline_media']['edges']:
            detail = detail['node']
            caption = detail['edge_media_to_caption']['edges'][0]['node']['text'][:10]
            likes = detail['edge_media_preview_like']['count']
            entries[caption] = likes

        pointer = data['data']['user']['edge_owner_to_timeline_media']['page_info']
        if(pointer['has_next_page']):
            cursor = pointer['end_cursor']
        else:
            break

    with transaction.atomic():
        for entry,likes in entries.items():
            Gallery.objects.filter(entry_id=entry).update(likes=likes)
    


def LeaderBoardView(req):
    updateTheDB()
    gallery = Gallery.objects.all().order_by('-likes')[:20]
    # t1 = threading.Thread(target=updateTheDB)
    # t1.start()
    context = {'leaderboard': gallery}
    return render(req, 'gallery/leaderboard.html', context)
