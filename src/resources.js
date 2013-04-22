/* Do not alter. Auto generated file */

module.exports = {
	"delicious": "<div class=\"socialfeed-item socialfeed-delicious\">\n  <i class=\"socialfeed-icon icon-link\"></i>\n  <header>\n    <h2><a href=\"{{u}}\">{{d}}</a></h2>\n    <time datetime=\"{{dt}}\">{{time_since}}</time>\n  </header>\n  <div class=\"socialfeed-body\">\n    {{n}}\n  </div>\n</div>",
	"disqus": "<div class=\"socialfeed-item socialfeed-disqus\">\n  <i class=\"socialfeed-icon icon-comment-alt\"></i>\n  <header>\n    <h2><a href=\"{{author.profileUrl}}\">{{author.name}}</a></h2>\n    <time datetime=\"{{createdAt}}\">{{time_since}}</time>\n  </header>\n  <div class=\"socialfeed-body\">\n    {{message}}\n  </div>\n</div>",
	"github_create": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-create\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> created repository <a href=\"{{repourl}}\">{{reponame}}</a>\n    </h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n</div>",
	"github_createbranch": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-createbranch\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> \n      created branch <a href=\"{{branchurl}}\">{{branchname}}</a> \n      at <a href=\"{{repourl}}\">{{reponame}}</a></h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n</div>",
	"github_fork": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-fork\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> \n      forked repository <a href=\"{{repourl}}\">{{reponame}}</a>\n      to <a href=\"{{forkeeurl}}\">{{forkeename}}</a>\n    </h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n</div>",
	"github_issue": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-issue\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> \n      {{action}} issue <a href=\"{{issueurl}}\">{{issuename}}</a>\n    </h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n  <div class=\"socialfeed-body\">\n    {{title}}\n  </div>\n</div>",
	"github_pullrequest": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-pull-request\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> \n      {{action}} pull request <a href=\"{{pullrequesturl}}\">{{pullrequestname}}</a>\n    </h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n  <div class=\"socialfeed-body\">\n    {{title}}\n  </div>\n</div>",
	"github_push": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-push\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2>\n      <a href=\"{{profileUrl}}\">{{username}}</a> \n      pushed to <a href=\"{{repourl}}\">{{reponame}}</a>\n    </h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n  <ul class=\"socialfeed-commit-list\">\n    <li>\n      <a href=\"{{commiturl}}\">{{commit}}</a>\n      <span>{{commit_message}}</span>\n    </li>\n  </ul>\n</div>",
	"github_watch": "<div class=\"socialfeed-item socialfeed-github socialfeed-github-watch\">\n  <i class=\"socialfeed-icon icon-github\"></i>\n  <header>\n    <h2><a href=\"{{profileUrl}}\">{{username}}</a> starred <a href=\"{{repourl}}\">{{reponame}}</a></h2>\n    <time datetime=\"{{created_at}}\">{{time_since}}</time>\n  </header>\n</div>",

};