from django.core import management

def cron_reset_data():
    '''
    Every monday at 00:00 am PST the counter resets to 2
    '''

    management.call_command('reset_data')
