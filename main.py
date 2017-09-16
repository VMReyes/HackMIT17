import jinja2
import webapp2

env=jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('index.html')
        template_vars = {}
        self.response.write(template.render(template_vars))
class DashboardHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('dashboard.html')
        template_vars = {}
        self.response.write(template.render(template_vars))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/dashboard', DashboardHandler)
], debug=True)
