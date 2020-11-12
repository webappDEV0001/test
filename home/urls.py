from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .viewsets import CounterViewSet

router = SimpleRouter()
router.register(r'counter', CounterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]