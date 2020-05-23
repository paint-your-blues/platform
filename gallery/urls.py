from .views import EntryPageView, LeaderBoardView
from django.urls import path

urlpatterns = [
    path('leaderboard/', LeaderBoardView, name='leader-page'),
    path('', EntryPageView, name='entry-page'),
]
