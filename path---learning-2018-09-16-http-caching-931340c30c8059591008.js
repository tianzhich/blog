webpackJsonp([0xc553d75bc6d9],{285:function(e,a){e.exports={data:{markdownRemark:{html:'<h2 id="前言"><a href="#%E5%89%8D%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前言</h2>\n<ul>\n<li>\n<p>什么是HTTP缓存</p>\n</li>\n<li>\n<p>为什么需要HTTP缓存，因为使用HTTP缓存可以减少请求响应时间和避免网络时延带来的等待时间</p>\n</li>\n<li>\n<p>如何合理使用缓存，设置不同文件的缓存时间</p>\n</li>\n</ul>\n<h2 id="缓存的种类"><a href="#%E7%BC%93%E5%AD%98%E7%9A%84%E7%A7%8D%E7%B1%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存的种类</h2>\n<p>缓存分为两种，<em>Private cache</em>和<em>Shared cache</em></p>\n<ul>\n<li>\n<p><em>Private cache</em>是针对单个用户而言，一个例子就是自己的浏览器缓存，使用这些缓存实现了浏览器的前进/后退，而无需再次请求资源</p>\n</li>\n<li>\n<p><em>Shared Cache</em>针对多个用户，比如代理服务器，一个ISP (Internet Service Provider)或者公司都有代理服务器，用来缓存一些资源，供所有员工访问，而不必再向互联网发出请求，避免网络延迟</p>\n</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-1a3c7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 850px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.967032967032964%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABDrAAAQ6wFQlOh8AAACz0lEQVQ4y41Ta0hTYRg+c6WVl5CxgTnKGQiC2D9TMUstqSjBmbUf0kzNQLqAUFJov/zRjwqiLHOBaRClEFiQSQ0rdK0QY+Fu7L6zc9lkZ+5+ae70ft6Yzh+98HCe73sv3/e9z3swbIuxLIttY5kC/j7ef8auml6v2wigKOqW0+kcHB4e5pEk2ePxMK98Pt9Xt9v9EPltrijPSoeE60X/mL2pBXVaLXJyECcIot/hcAxZLJZ+2GMTiQT6sPF4nG3v6KyRT3//5vWHbOu5DsqdWlCjVmPx5dWCVqv1GeCTSqXq9Hg8vkAgEGMYJmy32x+BO/+LfPplIBh5t55L0lsKlhSXYCRFbjyZIEgJTdM3ER94PHBo8uPk5dGR0drk3pU+XY0VN4qx4tKyFX64vArDDAYDhuN42tjbsZQmr60zAFzA7r47vVnJMcm8vasHs7ui2+qTBcgG7FhL4gC4yQGigkIUk7N22J4jx+q5fp+Xwy7H0jCj0SiAG1bIZLJder1+JwhRZrPZzjtwR/2mKdBpBSBWxczsTHp3d3fO3NxchclougAvPL7pOtDotsXFRUan052FggpISsCILCNV1QsL4tfj78sZb/i+g6DuQV+XlD+UE+A3RCKRGBj7F5RXqX7XTslnqxlv6Dnq4QlQdMhkMl3TarUs8JXxQEbTVJ1GZ2pB3Gyx37VYzEMajUbNJlk4HGYVitmqGcWvXrTGzGZzKwzy0k+lsnJ+fr7D5XJ9iMWi4yRBnkQvCEUTwkA4Xm3H8dswm165XP4Ahr4vGAxO+P3+Nzar7SiKM5jxQl8g0oCazgVkVJVXIhEyRcLC/fl5B0TA+dIWKT9Z0ampz3uBol+Qf1BUVJCbzcsHLmiVdghTpK2pq8eeDAymixua8pqbJEXXr97IRfuyFyMcfyi6ofKVzq7sNmm76Fxjs0jSLClovXgp7/SpMxnoQKeL4f4D7b7KZizqIdwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="http cache type"\n        title=""\n        src="/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-8d63b.png"\n        srcset="/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-16ce1.png 213w,\n/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-898e7.png 425w,\n/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-8d63b.png 850w,\n/blog/static/http-cache-type-9b8d6b31519cb600a9cabcbe8ef4b2ca-1a3c7.png 910w"\n        sizes="(max-width: 850px) 100vw, 850px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="缓存控制"><a href="#%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存控制</h2>\n<p>要清楚缓存控制，这里要先分清两个概念，一个叫做缓存存储（Cache Storage），一个叫做缓存（Caching）</p>\n<p>其实在中文里面，可能直接都说成缓存，但是这样不助于理解下面缓存控制的前两种情况。其实缓存存储是一个实实在在的东西，而缓存只是它的一个动作</p>\n<p>后来我又发现国人有<strong>强缓存</strong>和<strong>协商缓存</strong>的说法，强缓存就是指<em>Cache Storage</em>会直接返回Cache的内容，协商缓存是指<em>Cache Storage</em>向原始服务器进行验证，如果原始服务器返回<em>304 Not Modified</em>，<em>Cache Storage</em>才返回Cache的内容</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/chrome-memeory-cache-disk-cache-ede1c000cb59bb8dcaefc47b5d04ae20-d478a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 729px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.5281207133059%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABgUlEQVQozyWQ246jMBBE+f+vmn1ZbSKN5pJkQgLEGDAYMBAIt7CRzhr2oVVyu6q6qx1fKtKiITMt5X2g6iZMO1J3I8HhQHI6knsXfJmiLccL1caNVEFh7pi6I8lKZKKJLDoi1pz8mONV4kU5N1Uh0pqkaMmCG10SU8sQP9KU7WQ5mspi47nkX+8k7zui/W9674ePPzucLEs5n12uVw/3cuHsulsJISirinlZGOZ569X2/WO5fdcxDw9ULJEiQKuE1/jgM0hwirJEyIhQxtyEtBhtqPOCyhpM00Tf96y8yRqLMGIYRtq2I7ecPM8xVc0yT1yUjWzKgljZ+9iPVTSMI/0wbKKmuTNbk9XQmIrn80lwC7chj36gNIa8KKnqhr/LE1/XOCrN8PyATOfUTcNiI671er2sidnEXWfjpelm+H08bQsMtSG9eURXFy0Frzrn8+jipErh2vuJ8H/MdaNVuJqWa8xp3Ay1Hbj23cuVzG7VCRe1/0W8e0N/7Vlij8N+zz/zKAfXXrVIlgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="chrome memeory cache disk cache"\n        title=""\n        src="/blog/static/chrome-memeory-cache-disk-cache-ede1c000cb59bb8dcaefc47b5d04ae20-d478a.png"\n        srcset="/blog/static/chrome-memeory-cache-disk-cache-ede1c000cb59bb8dcaefc47b5d04ae20-9fd74.png 213w,\n/blog/static/chrome-memeory-cache-disk-cache-ede1c000cb59bb8dcaefc47b5d04ae20-77f2f.png 425w,\n/blog/static/chrome-memeory-cache-disk-cache-ede1c000cb59bb8dcaefc47b5d04ae20-d478a.png 729w"\n        sizes="(max-width: 729px) 100vw, 729px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<span>淘宝网首页, Chrome Dev Tools下观察到的协商缓存(304)和强缓存 (from xxx cache)</span></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/HTTPStaleness-38a664f76ea31a19134dea5592f67677-eb1e6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 822px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 110.70559610705597%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAABDrAAAQ6wFQlOh8AAAFNElEQVQ4y31Va2ySVxg+H5eP2wcFbCktUCh8XC1R6IVCL1AoIKVFCqVcyp0CBax1XeptizOZyfy5H+7n1u3n4p/NbsnWdjNb1GVOs1syp3a0c9qkizH1p3NJ930fVdG5vcnJe97vfc573nOe5wAQAgDUGp0MVag07VI5EwuBubcPWAet+BTIpBJYpVRrsWkzHn+xuspYXl4m4/PZyiECo5S3sxQKpUaOakTgiQmFYip4ie3s7EC4r1aroUePHm0+fvx4Z3t7+3xdnvCoQklVa/Vk4LY5ud4DXqHdNoj09w8wvF4vMzQZZaVSGWapVIEX31+EMTxtZXnFurm5uXjv3r13r1y+4jXsMzYcPnQYdjjsJJ1OR9JqNTAJr+x1e9kep5sf8AeY2XSOnkqmGPFUnjWdK9MXXj1NYKKRCF6UVN95JBxFyuUK3NfXR9Hr9RSsKAtB2NBTAJ/PhTkNPPJuiCfIux43Smhygv7Z5yu0u3f/gL/6+hL85qnXiJxc1kIAtFotpaurCwD/iI9Yt1+v57nd3jaXwy1wOT2Cwf6hRnOvhWO3D7O1Wj3P1GNq7dhrbMLAiFAg4ibjaX42k2UHg6EGo9HMVKlQ2GDofNZhNBSmxqcyGDBHO77wOvnM6bOkVCJHfWX+KNUfmKJgEPrFL1cFN2/e1K5X19vwK4hMxuB0pgAvHH8bEgoFJLVaUyuIyYYuk7Uz6XTGc/fUZ7YwIsFQI774vcUPRm/drv6FsbqDkXP9hx9/guuxKpWKjKJoLVCrdWIUVSkVChTBY/vQMBj3hUEinoLOf3ie2OTjC0vNt9aq6e2HD2fu3Lmjwb9hbINisUzUkMvlZIVCAYH/s97uTqjT2L2n12SWCgXClhf0WdOfREp4rBjeIQQO2F1NIy6P1G6zch32YY7P5+OEI3FuMpHmFAol2tmzb8EdHR0NIpGIubq6qnrw4IHl/v37xrXffn5uc6VSVetwbMRHczuczLFRH/XE3BEoGg2Thz0BSiych+o7uXb9e0t1/fe/8Tvc2tqqHls4rrX09EmioQjv4KifLhK1YgLf++zIWrWSFZtKNcwUKoyZYomFMcgOBgKw1WrDnyT11BuneZcuf+PZ2vpzfO32Gv5myZOBCdg/Mgr7xoIUsVhExrqEQD6ZrTHa29swEYygiVhKmEpmG8OhGG8iEOJiOuMNDbm5u0L/T1Mqlf8mpfrL3ZeCEQSGbDYbCTstCTsuGWMZQpg8EPD5gdNmr5GDojVSTAJch1o+JpvWdpmcgSdnCiWAkQISyTQBpsLQ052XlpbA+voGcDtcwOPygm6T+alssFHDidukHIVC1SIRtzFe7G5fx36GwdDFHLY7OdlckV5PVL2EcNkQR3ZZh9le54E9xXyWeu6dc+T5+XnqsaNH4ZMnT1Knc9M06+BQU3eXSYata6q/xwHzQMvB0XFRvrRAdNWh10EqlRL/+RrhYqM5FJhAivkiks8XWOlskZPPlZhzh0+QnnTz7dVruttr1RVMg79iT+/i3Oxce6tQzN1vMDIkUgVd2ibjyOXos6crkUhgYbOQBCAK/pHEYiJEcjpfIDrAJINe/e76pxsbGxdv3Lhx7FB5VhyLxiSZZAoNT8ZkNqudTxQa84wS3tTT0+iwO1sH+218h93VbO4x8wwGI9Jp7ELM5gEeBmncHXuIdT4/czqTZ2UTCW65UGRbB/tpRKG5yhHCJ6JxRmQy3piIZRjTuQo8k69QYlNpRrk8S/ePR+HgeKgpOZVqnquUmJ98dOGl/z8WswX8A5A7fsFRRK6GAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="HTTPStaleness"\n        title=""\n        src="/blog/static/HTTPStaleness-38a664f76ea31a19134dea5592f67677-eb1e6.png"\n        srcset="/blog/static/HTTPStaleness-38a664f76ea31a19134dea5592f67677-c0d22.png 213w,\n/blog/static/HTTPStaleness-38a664f76ea31a19134dea5592f67677-6a9d0.png 425w,\n/blog/static/HTTPStaleness-38a664f76ea31a19134dea5592f67677-eb1e6.png 822w"\n        sizes="(max-width: 822px) 100vw, 822px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<span>强缓存和协商缓存验证资源是否过期</span></p>\n<p>上面一幅图中，<em>304 Not Modified</em>表示使用了协商缓存，而<em>from memory cache</em>和<em>from disk cache</em>则直接使用强缓存</p>\n<blockquote>\n<p>Chrome在某个版本之后将以前的<em>from cache</em>变成了<em>from disk cache</em>和<em>from memory cache</em>，就跟名字一样，缓存在磁盘中的内容即使在关闭了当前tab之后还能使用，但是缓存到内存的内容，当关闭tab或者浏览器，或者浏览器崩溃后，就消失了。但是<em>memory cache</em>加载速度更快，从上图也能看出</p>\n</blockquote>\n<p>关于强缓存和协商缓存，我没发现这两个词的英文出处，但是这两个词理解起来更形象，所以下面的缓存控制情况我也会用到这两个词</p>\n<h3 id="1-不使用缓存存储"><a href="#1-%E4%B8%8D%E4%BD%BF%E7%94%A8%E7%BC%93%E5%AD%98%E5%AD%98%E5%82%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 不使用<strong>缓存存储</strong></h3>\n<p>可以理解为每次的请求都不经过Cache Storage，直接发给服务器，返回新的对象</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Cache-Control: no-store\nCache-Control: no-cache, no-store, must-revalidate</code></pre>\n      </div>\n<h3 id="2-不直接使用缓存内容"><a href="#2-%E4%B8%8D%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E7%BC%93%E5%AD%98%E5%86%85%E5%AE%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 不直接使用<strong>缓存内容</strong></h3>\n<p>Cache Storage会缓存内容，但是每次需要向服务器验证资源是否过期，没过期才能使用缓存，这就是<em>304 Not Modified</em>的情况，也就是我们所说的<strong>协商缓存</strong></p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Cache-Control: no-cache</code></pre>\n      </div>\n<h3 id="3-公共缓存和私有缓存"><a href="#3-%E5%85%AC%E5%85%B1%E7%BC%93%E5%AD%98%E5%92%8C%E7%A7%81%E6%9C%89%E7%BC%93%E5%AD%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 公共缓存和私有缓存</h3>\n<p>例如告诉资源只能被<em>Private Browser Cache</em>缓存起来还是同时也能被<em>Public Proxy Server</em>缓存起来</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Cache-Control: private\nCache-Control: public</code></pre>\n      </div>\n<h3 id="4-强缓存过期控制"><a href="#4-%E5%BC%BA%E7%BC%93%E5%AD%98%E8%BF%87%E6%9C%9F%E6%8E%A7%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 强缓存过期控制</h3>\n<p><code class="language-text">Cache-Control</code>优先级高于<code class="language-text">Expired</code>，前者是相对时间，后者是绝对时间；前者为<em>General Header</em>的字段，后者为<em>Response Header</em>的字段</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Cache-Control: max-age=31536000 \nExpires: Wed, 21 Oct 2015 07:28:00 GMT</code></pre>\n      </div>\n<h3 id="5-资源验证"><a href="#5-%E8%B5%84%E6%BA%90%E9%AA%8C%E8%AF%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. 资源验证</h3>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Cache-Control: must-revalidate</code></pre>\n      </div>\n<h2 id="缓存验证"><a href="#%E7%BC%93%E5%AD%98%E9%AA%8C%E8%AF%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存验证</h2>\n<p>缓存验证发生在用户刷新，或者响应头中包含<code class="language-text">Cache-Control: must-revalidate</code>的情况</p>\n<p>缓存验证有两种形式，都可以用来验证文档是否过期</p>\n<ul>\n<li>文档的最后修改日期，响应头<em>Last-Modified</em>字段，请求头<em>If-Modified-Since</em>字段请求验证</li>\n<li>对文档当前版本的唯一标识，叫做<em>entity tag</em>，响应头<em>ETag</em>字段，通常使用MD5 Hash实现，请求头<em>If-None-Match</em>字段请求验证</li>\n</ul>\n<p>同时，缓存验证有两种验证类型</p>\n<ul>\n<li>强验证（strong validator），文档对比一个字节一个字节地进行，严格对比</li>\n<li>弱验证（weak validator），文档只有语义不同才认为是改变，例如一个HTML文档也许只是里面的广告发生改变，或者是页脚的日期发生改变，弱验证会认为它们还是相同的</li>\n</ul>\n<p><strong>HTTP默认使用的是强验证</strong></p>\n<p>需要注意的是，一般情况下，<em>Last-Modified</em>字段只能作为弱验证，因为它的最小单位是秒，一秒内文档可能改变2次，无法做到标识每一次改变，如果使用它做强验证，则需要明确知道不会发生这种情况。当然，还有一些其他的限制，具体的限制可以看我下面的第4条RFC文档参考，这里就不细说了</p>\n<p>而<em>ETag</em>默认作为强验证，如果需要用它实现弱验证比较困难，因为需要判断文档中不同元素的语义，确保语义变化时<em>ETag</em>的值才发生变化，而不是每次检测到字节变化时就生成一个新的值</p>\n<p>缓存验证这部分建议有能力的同学直接查看第4条RFC参考</p>\n<h2 id="条件缓存（响应头增加vary字段）"><a href="#%E6%9D%A1%E4%BB%B6%E7%BC%93%E5%AD%98%EF%BC%88%E5%93%8D%E5%BA%94%E5%A4%B4%E5%A2%9E%E5%8A%A0vary%E5%AD%97%E6%AE%B5%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>条件缓存（响应头增加<em>Vary</em>字段）</h2>\n<p>该字段指出了筛选条件，如果下一次到达<em>Cache Storage</em>的请求中的该条件与缓存时的该条件的值不一样，则重新向真实server发请求，否则使用缓存，看下面这幅图</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/HTTPVary-c864264bc709794a184811024c0f4d1a-c20c8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 752px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 108.64361702127661%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAABDrAAAQ6wFQlOh8AAAE6UlEQVQ4y61VWW8bVRS+Y3s271MvYzt2Ei9jj5fYztasbVw79oyXsUncNI7tOI7tJg3QpkW0ErQIJLo+FxASDwgEDwio4C+UNyR4IC0oS6kQVUgEqtqHSu1TuGM3bYBW8MCRztyZe+Z+955zvvkGAGiMy2XzeQOsw8Eaed4Bzl/6HBQKJdDX0yuGgY9lyc6OThbe6kDLELDHHB0dCreb9XlZX+fuHGLvdJC0qVMKnmOhYEixubn57sOHD7999OjRnbt3757fjaV4DnG53CTDsBjIcWlZ+UgJPTg6jI0dGpVwPCeZPJyXNhoLsrOvn5NcvHhBurOzAxKJhGJra+ujBw8e3Ll/7/53GxsbsxBL+uLSy7gIqqVUrVNzUY5Ocyl3Mp4wTE4cNk9PTdOl0qylUqm1lYpV6sTyKezq1auo0WBQwdcVZtpCwVENXS5ksuaB/YPGUrGIBoNBiqZpydOUukKy6amSsjbXIOvVurwKPTaeQXfj2dwLCDwp8qxyVMpzgGEYrK2tDQEWo745abFYlHAgxDSgyx47ikNDZShGabXqaDSmu3z5MnXu7Fv7zr99QVGr1lXHFpeUX351TVoqFfHu7m4APAzTBHQ6nSjDuCWsxwu8rBfx+QKIzdbx5BQer2e3YQro4ubq6lzNmc9NwtKUjUI2b2hGg739zRHDn93dWCRGVgozIgh+/fr1/h9WbtY3N397Y211jROzOP3qGbJcqiiSyYzqySK3yyX3+wJqp8NDHhgebM7x8aRyPBLXpbi0NZMSPMVCKQw7e/P3P+7tiAZp897f9pZ4vewTQLPP63c6HB5jZKwPOffmFTBXbYDCVLEZry2dQcKhXvn6+nr7jZWV6OrqavcuyuLCEnL8pVPA7w/I7HY7+D8N8QcCAMQjcX1ynLOneV5XLs9qqnNV9XytoanXF7VH68fkJ5ZPossnT6J+v1+dS2WoRr2hr1Vr+45MTWuSXFad5AVtJpWlhodGNE1YgRfkuZRACcm0qjgza65W5o21+bqp0Vg0F2bmtPNHl8hPP/kYphwiwl1BLZfgNbPFsuZoY0EzUyhrDkWi2tHRg9quQBdNksRTnur0ekyjpvZ+y8geBwaDQabaR0mely9BEpJQKAxAT7inOQFZriChiWQWWSQ6giBYk9goipnNZjXkqp5PcHRfz7ApnUzqI2NRS39vP22yWEkcxwibzQrAYG+gRVwPK1s+fvpfK89FIqrXXlnW6TWUar5aM1XKFUN5dl43MZFv1ZC2MX9Z0GZ2tBYmMlg8GicSMY4WUkI75KJ9bW3tnZ9v//L9rdu/bm9tbV8R3/vi2tfShcaCdGTkAG5rbwe7AmpyM6yfcXls/nBrg/FYikhE48oMl9amUznTRC7P3rq18cHKjR/Xb/60/s3W9nZ+70EUCkLi8/paDziBShwORh7wh7D/yjnxUioUCSh9eDqZJcLh3tbaQ0MHZXlhAhvo634WmNhVqUyGSmFDoJzF0FBXWAkB3I1qXTeRzWkEPqNJQS4ODIwQjwU2YcxAgU3zSV0mLZiTfJrOCoIpI0xaR0eiWrvT15Q0SBuV0WjE1Wo1jpDKf+ii2UxLvWLKeKhVM6vVqg52ha0D+4d0g/sHDENDI0aX20d12p2iiojskWMYJtJKjqEyifhb4MYTIBFLgA/f/0wUWJnDYQd/AszHLPgmNurTAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="HTTPVary"\n        title=""\n        src="/blog/static/HTTPVary-c864264bc709794a184811024c0f4d1a-c20c8.png"\n        srcset="/blog/static/HTTPVary-c864264bc709794a184811024c0f4d1a-cb99e.png 213w,\n/blog/static/HTTPVary-c864264bc709794a184811024c0f4d1a-92229.png 425w,\n/blog/static/HTTPVary-c864264bc709794a184811024c0f4d1a-c20c8.png 752w"\n        sizes="(max-width: 752px) 100vw, 752px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<span>在响应头使用<em>Vary</em>字段条件验证<em>Content-Encoding</em></span></p>\n<p><em>Vary</em>字段通常会对<em>User-Agent</em>进行验证，避免将移动端缓存的文档直接发给桌面端请求的用户，反之亦然</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">Vary: User-Agent</code></pre>\n      </div>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<ol>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching">https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching</a></li>\n<li><a href="https://stackoverflow.com/questions/44596937/chrome-memory-cache-vs-disk-cache?rq=1">https://stackoverflow.com/questions/44596937/chrome-memory-cache-vs-disk-cache?rq=1</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests">https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests</a></li>\n<li><a href="https://www.freesoft.org/CIE/RFC/2068/138.htm">Weak and Strong Validators</a></li>\n</ol>',frontmatter:{title:"HTTP Caching",date:"September 16, 2019",excerpt:"HTTP缓存作为Web重要的一环，理解并合理使用它能够提高Web性能",contents:[{text:"前言",subContents:null},{text:"缓存的种类",subContents:null},{text:"缓存控制",subContents:[{text:"1-不使用缓存存储"},{text:"2-不直接使用缓存内容"},{text:"3-公共缓存和私有缓存"},{text:"4-强缓存过期控制"},{text:"5-资源验证"}]},{text:"缓存验证",subContents:null},{text:"条件缓存（响应头增加vary字段）",subContents:null},{text:"参考",subContents:null}]}}},pathContext:{slug:"/learning/2018/09/16/HTTP-Caching/"}}}});
//# sourceMappingURL=path---learning-2018-09-16-http-caching-931340c30c8059591008.js.map