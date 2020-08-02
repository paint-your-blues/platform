from .views import EntryPageView, LeaderBoardView, GalleryJSON
from django.urls import path

urlpatterns = [
    path('leaderboard/', LeaderBoardView, name='leader-page'),
    path('gallery/json/', GalleryJSON, name='galley-json'),
    path('', EntryPageView, name='entry-page'),
]
