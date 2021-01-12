from hola import user_views
from hola import matching_views
from hola import info_views
from django.urls import path

urlpatterns = [
    path('signup/', user_views.signup, name='signup'),
    path('signin/', user_views.signin, name='signin'),
    path('currentUser/', user_views.currentUser, name='currentUser'),
    path('logout/', user_views.logout, name='logout'),

    path('request/', matching_views.requestMatching, name='apply'),
    path('request/<int:id>', matching_views.testMatching, name='test'),

    path('singlematch/<int:id>', matching_views.singleMatching, name='single'),

    path('notices/', info_views.notices, name='notice'),
    #path('token', views.token, name='token'),
]