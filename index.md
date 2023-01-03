---json
{
    "layout": "layout.liquid",
    "title": "Matt Greenfield",
    "headerStrings": ["work for everyone", "work on all devices", "load fast", "convert", "just work"],
    "sideProjects": [
        { "title": "Football wordle", "href": "https://github.com/mattgreenfield/football-quiz" },
        { "title": "Portfolio", "href": "https://github.com/mattgreenfield/portfolio" }
    ],
    "favouriteThings": [
        {
            "name": "Drums",
            "image": "hobbies_01.png",
            "altText": "Matt playing the drums. His mouth is wide open",
            "dotClasses": "bottom-[90px] -left-8"
        },
        {
            "name": "Running",
            "image": "hobbies_02.png",
            "altText": "Matt running in shorts and a coat. He is smiling",
            "dotClasses": "-top-4 -left-4"
        },
        {
            "name": "Pizza",
            "image": "hobbies_03.png",
            "altText": "A 4 year old, sat in front of a giant pizza. His mouth is wide open in awe",
            "dotClasses": "top-10 -right-10"
        }
    ]   
}
---

<header 
class="mb-10 mt-20 flex gap-10"
x-data="{ 
    scrolled: 0,
    strings: ['work for everyone', 'work on all devices', 'convert', 'just work' ],
    currentIndex: -1,
    headerScrollPerc: 0,
    toTop: 218.5,
    handleScroll(e) {
        this.setScrollPerc();
    },
    setScrollPerc() {
        const top = $root.getBoundingClientRect().top;
        if (top < -this.toTop ) return;
        this.headerScrollPerc = top / 1.2;
    },
    init() {
        this.toTop = $root.getBoundingClientRect().y;
        this.setScrollPerc();
        const incrementString = () => {
            if (this.currentIndex === this.strings.length - 1) {
                this.currentIndex = 0;
            }
            this.currentIndex = this.currentIndex + 1;
            window.setTimeout(incrementString, 2200);
        }
        incrementString();
    },
}"
@scroll.window.throttle.16ms="handleScroll"
>
    <div class="mb-20">
        <h1 class="font-semibold text-2xl md:text-4xl overflow-hidden">
            <span class="block">
                Hey, I’m Matt.
            </span>
            a frontend developer creating <br/>interfaces that&nbsp;<span class="relative">
            {%- for string in headerStrings -%}
                <span x-show="currentIndex === {{forloop.index0}}" x-cloak
                    class="absolute w-screen"
                    x-transition:enter="transition duration-1000"
                    x-transition:enter-start="transform translate-y-full opacity-0"
                    x-transition:enter-end="transform translate-y-0 opacity-1"
                    x-transition:leave="transition duration-1000"
                    x-transition:leave-start="transform"
                    x-transition:leave-end="transform -translate-y-full opacity-0"
                >{{ string }}.</span>
            {%- endfor -%}</span>
        </h1>
        <p class="max-w-screen-sm mb-8">I like working in small, collaborative teams, working alongside design and UX departments in component-driven, Agile workflows. I’m that guy that actually enjoys writing CSS!</p>
        <div class="flex gap-4">
            <a href="/cv" class="button"><span>Find out more</span></a>
        </div>
    </div>
    <div class="relative hidden md:block" x-bind:style="{ '--scrollPerc': toTop - headerScrollPerc }">
        <div class="not-sr-only absolute top-0 left-0 space-y-4">
            <div 
                class="h-20 w-screen rounded-full bg-[var(--color-secondary)] opacity-90 translate-x-[calc(var(--scrollPerc)*1.15px)]" >
            </div>
            <div 
                class="h-20 w-screen rounded-full bg-[var(--color-secondary)] opacity-70 ml-[5%] translate-x-[calc(var(--scrollPerc)*1px)]" >
            </div>
        </div>
    </div>

</header>

<div class="info-box">
    <h2 class="text-lg">I'm looking for work</h2>
    <p>I'm currently looking for remote or hybrid frontend developer roles in Sussex. <a class="font-semibold link" href="mailto:gmattgreenfield@gmail.com">Please get in touch</a></p>
</div>

<section>
    <h2>Latest side projects</h2>
    <p>There’s no such thing as a bad idea right? ....right?</p>

<ul class="grid gap-4 mt-2 sm:grid-cols-2">
    {%- for project in sideProjects -%}
    <li>
        <a href="{{project.href}}" class="group overflow-hidden block card !pt-14 !pb-2.5" target="_blank">
            <div class="translate-y-6 group-hover:translate-y-0 duration-300">
                <h3 class="m-0">{{project.title}}</h3>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-500 text-base link-with-arrow">View on Github</span>
            </div>
        </a>
    </li>
    {%- endfor -%}
</ul>
</section>

<section 
    x-data="{
        x: 8,
        y: 8,
        v: {x: 0, y: 0},
        setViewportSize() {
            const el = document.documentElement;
            this.v = {
                x: el.clientWidth,
                y: el.clientHeight,
            }
        },
        init() {
            this.setViewportSize();
        }
    }" 
    x-bind:style="{ '--pos-x': `${x}`, '--pos-y': `${y}` }" 
    @mousemove.window="(event) => {
        x = (event.clientX - (v.x/2)) / 60;
        y = (event.clientY - (v.y/2)) / 60;
    }"
>
    <h2 class="mb-10">A few of my favourite things</h2>
    <ul class="grid md:flex justify-around gap-20 px-10 mt-2">
        {%- for thing in favouriteThings -%}
                {% assign filename = "assets/images/" | append: thing.image %}
        <li class="relative">
            <div class="border-2 border-black">
                {% image filename, thing.altText, '220px' %}
            </div>
            <div class="card font-semibold text-xl !pt-14 !pb-4 follow-cursor relative -top-12 left-4 z-10">{{ thing.name }}</div>
            <svg width="109" height="67" viewBox="0 0 109 67" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                class="text-[var(--color-secondary)] absolute {{ thing.dotClasses }}">
                <circle cx="5.5" cy="5.5" r="5.5" />
                <circle cx="19.5" cy="5.5" r="5.5" />
                <circle cx="33.5" cy="5.5" r="5.5" />
                <circle cx="47.5" cy="5.5" r="5.5" />
                <circle cx="61.5" cy="5.5" r="5.5" />
                <circle cx="75.5" cy="5.5" r="5.5" />
                <circle cx="89.5" cy="5.5" r="5.5" />
                <circle cx="103.5" cy="5.5" r="5.5" />
                <circle cx="5.5" cy="19.5" r="5.5" />
                <circle cx="19.5" cy="19.5" r="5.5" />
                <circle cx="33.5" cy="19.5" r="5.5" />
                <circle cx="47.5" cy="19.5" r="5.5" />
                <circle cx="61.5" cy="19.5" r="5.5" />
                <circle cx="75.5" cy="19.5" r="5.5" />
                <circle cx="89.5" cy="19.5" r="5.5" />
                <circle cx="103.5" cy="19.5" r="5.5" />
                <circle cx="5.5" cy="33.5" r="5.5" />
                <circle cx="19.5" cy="33.5" r="5.5" />
                <circle cx="33.5" cy="33.5" r="5.5" />
                <circle cx="47.5" cy="33.5" r="5.5" />
                <circle cx="61.5" cy="33.5" r="5.5" />
                <circle cx="75.5" cy="33.5" r="5.5" />
                <circle cx="89.5" cy="33.5" r="5.5" />
                <circle cx="103.5" cy="33.5" r="5.5" />
                <circle cx="5.5" cy="47.5" r="5.5" />
                <circle cx="19.5" cy="47.5" r="5.5" />
                <circle cx="33.5" cy="47.5" r="5.5" />
                <circle cx="47.5" cy="47.5" r="5.5" />
                <circle cx="61.5" cy="47.5" r="5.5" />
                <circle cx="75.5" cy="47.5" r="5.5" />
                <circle cx="89.5" cy="47.5" r="5.5" />
                <circle cx="103.5" cy="47.5" r="5.5" />
                <circle cx="5.5" cy="61.5" r="5.5" />
                <circle cx="19.5" cy="61.5" r="5.5" />
                <circle cx="33.5" cy="61.5" r="5.5" />
                <circle cx="47.5" cy="61.5" r="5.5" />
                <circle cx="61.5" cy="61.5" r="5.5" />
                <circle cx="75.5" cy="61.5" r="5.5" />
                <circle cx="89.5" cy="61.5" r="5.5" />
                <circle cx="103.5" cy="61.5" r="5.5" />
            </svg>
        </li>
        {%- endfor -%}
    </ul>

</section>

<section>
    <div class="flex justify-between">
        <h2 class="mb-4">Employment</h2>
        <div>
            <a href="/cv" class="link">View All</a>
        </div>
    </div>

    {% assign jobs = collections.job | reverse %}
    {% assign job = jobs[0] %}

<div class="card">
    <div class="flex gap-4 items-start mb-2">
        <div class="w-10 h-10">
        {%- assign filename = "assets/images/" | append: job.data.slug | append: '.png' -%}
        {%- capture alt -%}The {{ job.data.name }} logo{%- endcapture -%}
        {%- image filename, alt, '40px' -%}
        </div>
        <div>
            <h3 class="mb-0 leading-none text-lg">{{ job.data.name }}</h3>
            <span class="text-base">{{ job.data.job }}</span>
        </div>
        <div class="text-gray-500 -mt-2 ml-auto text-sm">
            {{ job.date | date }} -&nbsp;
            {%- if job.data.endDate -%}
                {{ job.data.endDate | date }}
            {%- else -%}
                present
            {%- endif -%}
        </div>
    </div>
    <div>{{ job.templateContent }}</div>
    <div class="text-center bg-gradient-to-t from-white pb-5 pt-20 relative -bottom-6 -mt-56">
        <a href="/cv#upzelo" class=" bg-white link-with-arrow">Read more about this role</a>
    </div>
</div>
</section>
