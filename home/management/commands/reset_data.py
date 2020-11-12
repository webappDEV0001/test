from django.core.management.base import BaseCommand

from home.models import Counter


class Command(BaseCommand):
    def handle(self, *args, **options):
        counter, created = Counter.objects.get_or_create(pk=1)
        counter.number = 2
        counter.save()