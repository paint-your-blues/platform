from django.views.generic import TemplateView
from django.shortcuts import render
from .models import Gallery
import requests
import re
import threading


# Create your views here.
class EntryPageView(TemplateView):
    template_name = 'gallery/entry.html'


def updateTheDB():
    data = requests.get(
        'https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=35443081985&first=12'
    )
    data = data.json()
    for detail in data['data']['user']['edge_owner_to_timeline_media'][
            'edges']:
        detail = detail['node']
        insta = re.findall(
            ": [\w]+",
            detail['edge_media_to_caption']['edges'][0]['node']['text'])[0]
        gallery = Gallery.objects.get(insta_id=insta[2:])
        gallery.likes = detail['edge_media_preview_like']['count']
        gallery.save()


def LeaderBoardView(req):
    gallery = Gallery.objects.all().order_by('-likes')[:20]
    t1 = threading.Thread(target=updateTheDB)
    t1.start()
    context = {'leaderboard': gallery}
    return render(req, 'gallery/leaderboard.html', context)
