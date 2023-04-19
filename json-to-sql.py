import json
import pandas 
import pdb 
from pprint           import pprint 

sqltables = {
    'application' : {
        'id'    : 2354,
        'appid' : 1,
        'appname' : 'my-first-app',
        'description': 'This app will demonstrate converting json to sql tables',
    },
    'contacts' : {
        'id'    : 187,
        'first' : 'Bob',
        'last'  : 'Jones',
        'phone' : '858-485-2817',
    },
    'requests'  : {
        'id'    : 1854127,
        'from'  : 187,
        'subject' : 'request-for-quote',
        'requestdate' : '2023-04-04T00:00:00',
    },
}
xxx=pandas.json_normalize(data=sqltables)
pdb.set_trace()
x = 5 