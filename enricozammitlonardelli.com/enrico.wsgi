#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/html/enricozammitlonardelli.com/FlaskApp/")

from routes import app as application
application.secret_key = 'enrico_zammit'
