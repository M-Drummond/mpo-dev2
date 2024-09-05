<script setup lang="ts">
definePageMeta({
    layout: 'text'
})
</script>

<template>
    <section id="headings">
        <h3><a href="#headings">#</a> Headings </h3>
        <p>Elements <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>,
            <code>h5</code>, <code>h6</code> make up the <em>heading content</em> category.
        </p>
        <hgroup>
            <h1>This page has one of most anything you'd want, so we can make sure nothing looks busted.</h1>
            <h2>h2 Back in my quaint <a href='#'>garden</a></h2>
            <h3>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox.</h3>
            <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
            <h5>h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.</h5>
            <h6>h6 Pack my box with five dozen liquor jugs.</h6>
        </hgroup>
        <footer>
            <p>See the <a target="_blank" href="https://www.w3.org/TR/html5/dom.html#heading-content">Heading Content
                    spec.</a></p>
            <p>Note: these two paragraphs are contained in a <code>footer</code> element.
            </p>
        </footer>
    </section>

    <hr>
    <section id="sections">
        <header>
            <h3><a href="#sections">#</a> Sections</h3>
            <p>Elements <code>article</code>, <code>aside</code>, <code>nav</code>,
                <code>section</code> make up the <em>sectioning content</em> category.
            </p>
            <nav>
                <p>These links are contained in a <code>nav</code> element.</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        <article>
            <p>This paragraph is nested inside an <code>article</code> element. It contains many different, sometimes
                useful, <a href="http://www.w3schools.com/tags/">HTML5 elements</a>. Of course there are classics like
                <em>emphasis</em>, <strong>strong</strong>,
                and <small>small</small> but there are many others as well. Hover the following text for abbreviation
                element: <abbr title="abbreviation">abbr</abbr>. You can define <del>deleted text</del> which often gets
                replaced with <ins>inserted</ins> text.
            </p>
            <p>You can also use <kbd>keyboard text</kbd>, which sometimes is styled similarly to the
                <code>&lt;code&gt;</code> or <samp>samp</samp> elements. Even more specifically, there is an element
                just for <var>variables</var>. Not to be mistaken with block
                quotes below, the quote element lets you denote something as <q>quoted text</q>. Lastly don't forget the
                sub (H<sub>2</sub>O) and sup (E = MC<sup>2</sup>) elements.
            </p>
            <section>
                <p>This paragraph is contained in a <code>section</code> element of its parent <code>article</code>
                    element.</p>
                <p>↓ The following paragraph has the <code>hidden</code> attribute and should not be displayed. ↓</p>
                <p hidden>→ You should not see this paragraph. ←</p>
                <p>↑ The previous paragraph should not be displayed. ↑</p>
            </section>
        </article>
        <aside>
            <p>This is contained in an <code>aside</code> element.</p>
        </aside>
        <footer>
            <p>See the <a target="_blank" href="https://www.w3.org/TR/html5/dom.html#sectioning-content">Sectioning
                    Content spec.</a></p>
        </footer>
    </section>

    <hr>
    <section id="phrasing">
        <header>
            <h3><a href="#phrasing">#</a> Phrasing</h3>
            <p>Elements <code>abbr</code>, <code>b</code>, <code>bdi</code>,
                <code>bdo</code>, <code>br</code>, <code>cite</code>, <code>code</code>,
                <code>data</code>, <code>del</code>, <code>dfn</code>, <code>em</code>,
                <code>i</code>, <code>ins</code>, <code>kbd</code>, <code>mark</code>,
                <code>meter</code>, <code>progress</code>, <code>q</code>, <code>s</code>,
                <code>samp</code>, <code>small</code>, <code>span</code>, <code>strong</code>,
                <code>sub</code>, <code>sup</code>, <code>time</code>, <code>u</code>,
                <code>var</code>, <code>wbr</code>, and others make up the <em>phrasing content</em> category.
            </p>
        </header>
        <p><code>abbr</code>: Some vehicles meet the
            <abbr title="Super Ultra Low Emission Vehicle">SULEV</abbr> standard.<br>
            <code>br</code> was used to make this sentence start on a new line.
        </p>
        <p><code>bdi</code>: Some languages read right to left, <bdi lang="ar">مرحبا</bdi>.
            <code>bdo</code>: <bdo dir="rtl">The normal direction has been
                overridden.</bdo>
        </p>
        <p><code>em</code> is used for <em>emphasis</em> and usually renders as italics, contrast that with
            <code>i</code> which is used for alternate voice or to offset from the normal (such as a phrase from a
            different language or taxonomic designation): <i>E. coli</i> can be bad. <code>strong</code> is used for
            <strong>importance or urgency</strong> and usually renders as bold, contrast that with <code>b</code> which
            is used to <b>draw attention</b> without the semantic meaning of importance.
        </p>
        <p><code>cite</code>: In the words of <cite>Charles Bukowski</cite> — <q>An intellectual says a simple thing in
                a hard way. An artist says a hard thing in a simple way.</q></p>
        <p><code>data</code> can be used to specify <data value="2018-09-24T05:00-07:00">5 A.M.</data> that is
            machine-readable, but <code>time</code> is a better choice for specifying <time
                datetime="2018-09-24T05:00-07:00">5 A.M.</time> in a machine-readable format.
        </p>
        <p><code>del</code> can be <del datetime="2017-10-11T01:25-07:00">varily</del> used to mark deletions.
            <code>ins</code> marks <ins datetime="2007-12-19 00:00Z">insertions</ins>. <code>s</code>: similar to
            <code>del</code>, but used to mark content that is no longer relevant. <s>Windows XP version available.</s>
            <code>u</code>: a holdover with no real meaning that should be <u>removed</u>. <code>mark</code>: the HTML
            equivalent of the <mark>yellow highlighter</mark>. <code>span</code>: a
            <span>generic element</span> with no meaning by itself.
        </p>
        <p><code>dfn</code>: Foreign phrases add a certain <dfn lang="fr" title="French: indefinable quality">je ne sais
                quoi</dfn> to one's prose.
        </p>
        <p><code>q</code>: The W3C page <cite>About W3C</cite> says the W3C’s mission is <q
                cite="https://www.w3.org/Consortium/">To lead the World Wide Web to its full potential by developing
                protocols and guidelines that ensure long-term growth for the Web</q>.</p>
        <p><code>kbd</code> and <code>samp</code>: I did this:</p>
        <pre><samp>c:\&gt;<kbd>format c: /yes</kbd></samp></pre>
        <p>Is that bad? Press <kbd><kbd>Ctrl</kbd></kbd>+<kbd><kbd>F5</kbd></kbd> for a hard reload.</p>
        <p><code>var</code>: To log in, type <kbd>ssh <var>user</var>@example.com</kbd>, where <var>user</var> is your
            user ID.</p>
        <p><code>meter</code> and <code>progress</code>: Storage space usage:
            <meter value=6 max=8>6 blocks used (out of 8 total)</meter> Progress:
            <progress value="37" max=100>37%</progress>
        </p>
        <p><code>sub</code> is used for subscripts: H<sub>2</sub>O. <code>sup</code> is used for superscripts: E =
            MC<sup>2</sup>. <code>small</code> is used for side comments: <q>I wrote this whole document.
                <small>[Editor's note: no he did not]</small></q> <code>wbr</code>: used to specify where a word may
            break and it is super<wbr>cali<wbr>fragil<wbr>istic<wbr>expiali<wbr>do<wbr>cious.</p>
        <footer>
            <p>See the <a target="_blank" href="https://www.w3.org/TR/html5/dom.html#phrasing-content">Phrasing Content
                    spec.</a></p>
        </footer>
    </section>

    <hr>
    <section id="palpable">
        <header>
            <h3><a href="#palpable">#</a> Palpable Content</h3>
            <p>Elements <code>a</code>, <code>address</code>, <code>blockquote</code>,
                <code>button</code>, <code>details</code>, <code>dl</code>, <code>fieldset</code>,
                <code>figure</code>, <code>form</code>, <code>input</code>, <code>label</code>,
                <code>map</code>, <code>ol</code>, <code>output</code>, <code>pre</code>,
                <code>select</code>, <code>table</code>, <code>textarea</code>,
                <code>ul</code>, and others make up the <em>palpable content</em> category.
            </p>
        </header>
        <p><code>a</code>: <a href="http://example.com">Example</a>.</p>
        <p><code>address</code>:</p>
        <address>1 Infinite Loop<br>
            Cupertino, CA 95014<br>
            United States
        </address>
        <p><code>blockquote</code>:</p>
        <blockquote>
            <p>I quickly explained that many big jobs involve few hazards</p>
        </blockquote>
        <blockquote>
            <p>This is a multi-line blockquote with a cite reference. People think focus means saying yes to the thing
                you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other
                good ideas that there are. You have to
                pick carefully. I’m actually as proud of the things we haven’t done as the things I have done.
                Innovation is saying no to 1,000 things.</p>
            <footer>Steve Jobs, <cite>Apple Worldwide Developers’ Conference, 1997</cite></footer>
        </blockquote>
        <p><code>details</code> and <code>summary</code>:</p>
        <details>
            <summary>Copying... <progress max="375505392" value="97543282"></progress> 25%
            </summary>
            <dl>
                <dt>Transfer rate:</dt>
                <dd>452KB/s</dd>
                <dt>Duration:</dt>
                <dd>01:16:27</dd>
                <dt>Color profile:</dt>
                <dd>SD (6-1-6)</dd>
                <dt>Dimensions:</dt>
                <dd>320×240</dd>
            </dl>
        </details>
        <p><code>dl</code>:</p>
        <dl>
            <dt>Definition List Title</dt>
            <dd>Definition list division.</dd>
            <dt>Kitchen Sink</dt>
            <dd>Used in expressions to describe work in which all conceivable (and some inconceivable) sources have been
                mined. In this case, a bunch of markup.</dd>
            <dt>aside</dt>
            <dd>Defines content aside from the page content</dd>
            <dt>blockquote</dt>
            <dd>Defines a section that is quoted from another source</dd>
        </dl>
        <p><code>figure</code>:</p>
        <figure>
            <img src="http://placekitten.com/200/300">
            <figcaption>Figure 1: A picture of a kitten from <a
                    href="http://placekitten.com/200/300/">placekitten.com</a>
            </figcaption>
        </figure>

        <br>
        <hr>

        <br>
        <hr>


        <br>
        <hr>
        <p><code>ul</code> and <code>ol</code>:</p>
        <ul>
            <li>Unordered List item one
                <ul>
                    <li>Nested list item
                        <ul>
                            <li>Level 3, item one</li>
                            <li>Level 3, item two</li>
                            <li>Level 3, item three</li>
                            <li>Level 3, item four</li>
                        </ul>
                    </li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
        </ul>
        <ol>
            <li>List item one
                <ol>
                    <li>List item one
                        <ol>
                            <li>List item one</li>
                            <li>List item two</li>
                            <li>List item three</li>
                            <li>List item four</li>
                        </ol>
                    </li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
        </ol>

        <br>
        <hr>
        <p><code>pre</code>:</p>
        <pre>
pre {
display: block;
padding: 7px;
background-color: #F5F5F5;
border: 1px solid #E1E1E8;
border-radius: 3px;
white-space: pre-wrap;
word-break: break-all;
font-family: Menlo, Monaco;
line-height: 160%;
}</pre>
        <pre><samp>You are in an open field west of a big white house with a boarded
front door.
There is a small mailbox here.

></samp> <kbd>open mailbox</kbd>

<samp>Opening the mailbox reveals:
A leaflet.

></samp></pre>

        <br>
        <hr>
        <h4 id="tables"><a href="#tables">#</a> Tables</h4>
        <table>
            <caption>Tables can have captions now.</caption>
            <tbody>
                <tr>
                    <th>Person</th>
                    <th>Number</th>
                    <th>Third Column</th>
                </tr>
                <tr>
                    <td>Someone Lastname</td>
                    <td>900</td>
                    <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
                </tr>
                <tr>
                    <td><a href="#">Person Name</a></td>
                    <td>1200</td>
                    <td>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor
                        fringilla.</td>
                </tr>
                <tr>
                    <td>Another Person</td>
                    <td>1500</td>
                    <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
                        ultricies vehicula ut id elit.</td>
                </tr>
                <tr>
                    <td>Last One</td>
                    <td>2800</td>
                    <td>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                        amet fermentum.</td>
                </tr>
            </tbody>
        </table>
        <p id="table-summary">In the following table, characteristics are given in the second column, with the negative
            side in the left column and the positive side in the right column.</p>
        <table aria-describedby="table-summary">
            <caption>Characteristics with positive and negative sides</caption>
            <thead>
                <tr>
                    <th id="n">Negative</th>
                    <th>Characteristic</th>
                    <th id="p">Positive</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td headers="n r1">Sad</td>
                    <th id="r1">Mood</th>
                    <td headers="p r1">Happy</td>
                </tr>
                <tr>
                    <td headers="n r2">Failing</td>
                    <th id="r2">Grade</th>
                    <td headers="p r2">Passing</td>
                </tr>
            </tbody>
        </table>
        <table>
            <caption>Complex table with a <code>thead</code>, multiple <code>tbody</code> elements, and a
                <code>tfoot</code>.
            </caption>
            <thead>
                <tr>
                    <th></th>
                    <th>2008</th>
                    <th>2007</th>
                    <th>2006</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Net sales</th>
                    <td>$32,479</td>
                    <td>$24,006</td>
                    <td>$19,315</td>
                </tr>
                <tr>
                    <th>Cost of sales</th>
                    <td>21,334</td>
                    <td>15,852</td>
                    <td>13,717</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>Gross margin</th>
                    <td>$11,145</td>
                    <td>$8,154</td>
                    <td>$5,598</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Gross margin percentage</th>
                    <td>34.3%</td>
                    <td>34.0%</td>
                    <td>29.0%</td>
                </tr>
            </tfoot>
        </table>
        <table>
            <caption>A Table with <code>col</code> and <code>colgroup</code> of proto-indo-europeans languages and
                words.</caption>
            <col />
            <colgroup>
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <colgroup>
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <td></td>
                    <th colspan="4" id="germanic">Germanic</th>
                    <th colspan="4" id="italic">Italic</th>
                </tr>
                <tr>
                    <td></td>
                    <th colspan="2" id="north-germanic" headers="germanic">North Germanic</th>
                    <th colspan="2" id="west-germanic" headers="germanic">West Germanic</th>
                    <th colspan="4" id="latin" headers="italic">Latin</th>
                </tr>
                <tr>
                    <th id="modern-english">Modern English</th>
                    <th id="old-norse" headers="north-germanic germanic">Old Norse</th>
                    <th id="swedish" headers="north-germanic germanic">Swedish</th>
                    <th id="old-english" headers="west-germanic germanic">Old English</th>
                    <th id="old-dutch" headers="west-germanic germanic">Old Dutch</th>
                    <th id="french" headers="latin italic">French</th>
                    <th id="spanish" headers="latin italic">Spanish</th>
                    <th id="portuguese" headers="latin italic">Portuguese</th>
                    <th id="catalan" headers="latin italic">Catalan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th headers="modern-english" id="modern-english-no">No</th>
                    <td headers="modern-english-no germanic north-germanic old-norse">Nei</td>
                    <td headers="modern-english-no germanic north-germanic swedish">Nej</td>
                    <td headers="modern-english-no germanic west-germanic old-english">Ná</td>
                    <td headers="modern-english-no germanic west-germanic old-dutch">Nein</td>
                    <td headers="modern-english-no latin italic french">Non</td>
                    <td headers="modern-english-no latin italic spanish">No</td>
                    <td headers="modern-english-no latin italic portuguese">não</td>
                    <td headers="modern-english-no latin italic catalan">No</td>
                </tr>
                <tr>
                    <th headers="modern-english" id="modern-english-yes">Yes</th>
                    <td headers="modern-english-yes germanic north-germanic old-norse">já</td>
                    <td headers="modern-english-yes germanic north-germanic swedish">Ja</td>
                    <td headers="modern-english-yes germanic west-germanic old-english">Gea</td>
                    <td headers="modern-english-yes germanic west-germanic old-dutch">Ja</td>
                    <td headers="modern-english-yes latin italic french">Oui</td>
                    <td headers="modern-english-yes latin italic spanish">Si</td>
                    <td headers="modern-english-yes latin italic portuguese">sim</td>
                    <td headers="modern-english-yes latin italic catalan">sí</td>
                </tr>
                <tr>
                    <th headers="modern-english" id="modern-english-bear">Bear</th>
                    <td headers="modern-english-bear germanic north-germanic old-norse">Bjorn</td>
                    <td headers="modern-english-bear germanic north-germanic swedish">bjorn</td>
                    <td headers="modern-english-bear germanic west-germanic old-english">bera</td>
                    <td headers="modern-english-bear germanic west-germanic old-dutch">beer</td>
                    <td headers="modern-english-bear latin italic french">Ours</td>
                    <td headers="modern-english-bear latin italic spanish">Oso</td>
                    <td headers="modern-english-bear latin italic portuguese">Urso</td>
                    <td headers="modern-english-bear latin italic catalan">ós</td>
                </tr>
            </tbody>
        </table>
        <footer>
            <p>See the <a target="_blank" href="https://www.w3.org/TR/html5/dom.html#palpable-content">Palpable
                    Content spec.</a></p>
        </footer>
    </section>

    <hr>

</template>