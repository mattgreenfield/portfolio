---
layout: layout.liquid
title: CV
---

<section class="mb-10">
    <h2>About me</h2>
    <p>I am an experienced frontend developer who's worked with React and Vue (both with typescript).
    I like working in small, collaborative teams, working alongside design and UX departments.
    I'm a big fan of component-driven development and of Agile ways of working - I'm never afraid to throw out something if it's not performing.
    I love progressive enhancement and I like to build with this in mind - creating HTML and CSS that works, then adding complexities on top.
    I like to question decisions and believe there's no such thing as a stupid question. I'm big on keeping things simple and effective, do one thing and do it well.</p>
    <p>In my spare time, I enjoy playing the drums and running.</p>
</section/>

<section>
    <h2>My work</h2>
    <ul class="flex flex-wrap gap-2 mb-4 print:hidden">
    {%- for tech in collections.tech -%}
    <li>
        <label class="tag">
            <input type="checkbox" value="{{ tech }}" x-model="selectedTech" name="selectedTech" class="sr-only" />
            {{ tech }}
            </label>
    </li>
    {%- endfor -%}
    </ul>
<ul class="space-y-8 print:space-y-8">
{%- for job in collections.job reversed -%}
    <li class="card" id="{{ job.data.slug }}">
        <header class="mb-4">
            <div class="flex gap-2 items-center mb-2 flex-wrap">
                <div class="w-6 h-6">
                {%- assign filename = "assets/images/" | append: job.data.slug | append: '.png' -%}
                {%- capture alt -%}The {{ job.data.name }} logo{%- endcapture -%}
                {%- image filename, alt, '24px' -%}
                </div>
                <h3 class="mt-0 mb-0">{{ job.data.name }}</h3>
                <div class="text-gray-500 -mt-2 ml-auto text-sm">
                    {{ job.date | date }} -&nbsp;
                    {%- if job.data.endDate -%}
                        {{ job.data.endDate | date }}
                    {%- else -%}
                        present
                    {%- endif -%}
                </div>
            </div>
            <div class="text-base font-sans mb-4">{{ job.data.job }}</div>
            <ul class="flex flex-wrap gap-2 leading-none text-sm font-sans">{%- for tech in job.data.tags -%}
                {% if tech == 'job' %}{% continue %}{% else %}<li class="tag">{{ tech }}</li>{% endif %}
            {%- endfor -%}</ul>
        </header>
        <div class="mb-8 max-w-prose">{{ job.templateContent }}</div>
        <section x-data="{ 
            selectedIndex: 0,
            positions: [],
            setSelected(i) {
                this.selectedIndex = i;
                console.log(this.positions[i]);
                $refs.carousel.scrollLeft = this.positions[i];
            },
            init() {
                const slides = Array.from($refs.carousel.querySelectorAll('div:not(.invisible)'));
                console.log(slides);
                this.positions = slides.map((e) => {
                    // const rect = e.getBoundingClientRect();
                    // return rect.left + (rect.width/2) - 10;
                    return e.offsetLeft - (e.offsetWidth / 2);
                });
            }
        }">
            <h4 class="sr-only">Screenshots of work produced</h4>
            <div class="carousel print:hidden" x-ref="carousel" x-on:scroll.debounce="console.log"> 
                <div class="snap-start w-4 invisible flex-shrink-0"></div>
                {%- for path in job.data.images -%}
                {% assign filename = "assets/images/" | append: path %}
                <div class="snap-start h-64 bg-gray-100 rounded overflow-hidden flex-shrink-0 shadow-inner">
                    {% image filename, "a screenshot of my work", '567px' %}
                </div>
                {%- endfor -%}
                <div class="snap-start w-96 invisible flex-shrink-0"></div>
            </div>
            <div class="space-x-2 flex justify-end">
                {%- for path in job.data.images -%}
                <button 
                    type="button" 
                    x-on:click="setSelected({{forloop.index0}})"
                    class="h-2 bg-current overflow-hidden"
                    x-bind:class="{
                        'w-2 text-gray-300': selectedIndex !== {{forloop.index0}},
                        'w-10 text-gray-700': selectedIndex === {{forloop.index0}},
                    }"
                >{{ forloop.index0 }}</button>
                {%- endfor -%}
            </div>
        </section>
    </li>
{%- endfor -%}
</ul>
</section>

<section class="hidden print:block">
    <h2>Contact</h2>
    <ul>
        <li><a href="tel:07891799914">07891799914</a></li>
        <li><a href="mailto:gmattgreenfield@gmail.com">gmattgreenfield@gmail.com</a></li>
    </ul>
    <p>Thanks for printing my website. You can find it at www.mattgreenfield.com</p>
</section>
