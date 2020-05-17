from django.views.generic import TemplateView
from django.shortcuts import render


# Create your views here.
class EntryPageView(TemplateView):
    template_name = 'gallery/entry.html'


def LeaderBoardView(req):
    context = {
        'leaderboard': [{
            'username': 'ak47',
            'profile_pic': 'https://i.picsum.photos/id/237/200/200.jpg',
            'likes': '5000',
            'entry': 'https://i.picsum.photos/id/239/400/400.jpg'
        }, {
            'username': 'grenade',
            'profile_pic': 'https://i.picsum.photos/id/238/200/200.jpg',
            'likes': '10000',
            'entry': 'https://i.picsum.photos/id/238/400/400.jpg'
        }, {
            'username': 'rocket_launcher',
            'profile_pic': 'https://i.picsum.photos/id/239/200/200.jpg',
            'likes': '1',
            'entry': 'https://i.picsum.photos/id/239/400/400.jpg'
        }]
    }
    return render(req, 'gallery/leaderboard.html', context)
