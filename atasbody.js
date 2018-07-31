<!--css script youtube-->
&lt;script&gt;

    /* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */

    document.addEventListener(&quot;DOMContentLoaded&quot;,
        function() {
            var div, n,
                v = document.getElementsByClassName(&quot;youtube-player&quot;);
            for (n = 0; n &lt; v.length; n++) {
                div = document.createElement(&quot;div&quot;);
                div.setAttribute(&quot;data-id&quot;, v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = &#39;&lt;img src=&quot;https://i.ytimg.com/vi/ID/hqdefault.jpg&quot;&gt;&#39;,
            play = &#39;&lt;div class=&quot;play&quot;&gt;&lt;/div&gt;&#39;;
        return thumb.replace(&quot;ID&quot;, id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement(&quot;iframe&quot;);
        var embed = &quot;https://www.youtube.com/embed/ID?autoplay=1&quot;;
        iframe.setAttribute(&quot;src&quot;, embed.replace(&quot;ID&quot;, this.dataset.id));
        iframe.setAttribute(&quot;frameborder&quot;, &quot;0&quot;);
        iframe.setAttribute(&quot;allowfullscreen&quot;, &quot;1&quot;);
        this.parentNode.replaceChild(iframe, this);
    }

&lt;/script&gt;
<!--end css script youtube-->

<script type='text/javascript'>
//<![CDATA[
//Double Click
for (var pres = document.querySelectorAll("blockquote,pre,kbd"), i = 0; i < pres.length; i++) pres[i].addEventListener("dblclick", function() {
  var e = getSelection(),
    t = document.createRange();
  t.selectNodeContents(this), e.removeAllRanges(), e.addRange(t)
}, !1);
//]]>
</script>
