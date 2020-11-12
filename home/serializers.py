from rest_framework import serializers

from .models import Counter

class CounterSerializer(serializers.ModelSerializer):
	number = serializers.IntegerField()

	class Meta:
		model = Counter
		fields = ['number']

	def validate_number(self, value):
		
		# check whether the number is less than 1
		if value < 1:
			raise serializers.ValidationError('The value can not be less than 1')

		return value