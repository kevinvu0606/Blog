const mongoose = require('mongoose')
// marked = converts MarkDownLangauge into HTML
const marked = require('marked')
// slugify to abbreviate the title for the link
const slugify = require('slugify')
// dom purify to prevent malicious code in our Markdown
// {around JSDOM} because we only want a certain section of it
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
// 
const articleSchema = require('../db/dbSchema')

articleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  if (this.markdown) {
    this.sanitiziedHtml = dompurify.sanitize(marked(this.markdown))
  }
  next()
})


module.exports = mongoose.model('Article', articleSchema)