# Djangoの管理サイトを利用するためのもの
from django.contrib import admin
# urlとview関数を紐づけ(ルーティング)するためのもの
from django.urls import path
# 必要最低限の機能を保有したクラスビューを利用するためのもの
from django.views.generic.base import TemplateView

from django.views.generic.detail import DetailView
# viewsをインポートする
from . import views


# app名の指定
app_name = 'taskapp'

# 紐づけ
urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.IndexView.as_view(), name = 'index'),

    path('properties/', views.PropertiesView.as_view(), name = 'properties'),

    path('property-details/', views.PropertyView.as_view(), name = 'property-details'),

    path('contact/', views.ContactView.as_view(), name = 'contact'),

    path('test/', views.TestView.as_view(), name = 'test'),

    # path('comment/create/<int:pk>/', views.CommentView.as_view(), name='comment_create'),
]