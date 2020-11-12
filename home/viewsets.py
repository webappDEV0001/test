from rest_framework import viewsets, status
from rest_framework.response import Response
from django.db.models import F

from .models import Counter
from .serializers import CounterSerializer

class CounterViewSet(viewsets.ModelViewSet):
	serializer_class = CounterSerializer
	queryset = Counter.objects.all()
	http_method_names = ['get', 'patch']

	def update(self, request, *args, **kwargs):
		if 'number' in request.data:
			# This part can be removed, it contains something to set the value for number
			serializer = self.get_serializer(self.get_object(), data=request.data)
			# serializer.is_valid(raise_exception=True)
			if serializer.is_valid():
				self.perform_update(serializer)
				return Response(serializer.data)
			else:
				return Response({"message": "Value can not be less than 1"}, status=status.HTTP_400_BAD_REQUEST)
		else:
			counter = Counter.objects.filter(number__gt=1).first()
			if counter:
				counter.number = F('number') - 1
				counter.save()
				return Response({"message": "Value has been updated", "number": Counter.objects.get(pk=1).number}, status=status.HTTP_200_OK)
			else:
				return Response({"message": "Value can not be less than 1", "number": 1}, status=status.HTTP_400_BAD_REQUEST)

	def list(self, request, *args, **kwargs):
		counter = Counter.objects.get(id=1).number
		return Response({'number': counter}, status=status.HTTP_200_OK)
