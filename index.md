---
layout: layout.liquid
# title: My Rad Markdown Blog Post
---

> **Hey, I'm looking for work**
>
> I'm currently looking for remote or hybrid frontend developer roles in Sussex.
> <a  class="font-medium" href="mailto:gmattgreenfield@gmail.com">Please get in touch</a>

## About me

I am an experienced frontend developer who's worked with React and Vue (both with typescript).
I like working in small, collaborative teams, working alongside design and UX departments.
I'm a big fan of component-driven development and of Agile ways of working - I'm never afraid to throw out something if it's not performing.
I love progressive enhancement and I like to build with this in mind - creating HTML and CSS that works, then adding complexities on top.
I like to question decisions and believe there's no such thing as a stupid question. I'm big on keeping things simple and effective, do one thing and do it well.

In my spare time, I enjoy playing the drums and running.

## My work

<ul class="space-y-4 print:space-y-8">
{%- for job in collections.job reversed -%}
    <li class="card">
        <header class="mb-4">
             <div class="flex gap-2 items-center mb-2">
                <img src="./assets/images/{{ job.data.slug }}.png" alt="The {{ job.data.name }} logo" class="w-6 h-6"/>
                <h3 class="mt-0 mb-0">{{ job.data.name }}</h3>
                <div class="text-gray-500 -mt-2 ml-auto">
                    {{ job.date | date }} -&nbsp;
                    {%- if job.data.endDate -%}
                        {{ job.data.endDate | date }}
                    {%- else -%}
                        present
                    {%- endif -%}
                </div>
            </div>
            <div class="text-base font-sans">{{ job.data.job }}</div>
        </header>
        <div class="mb-4 max-w-prose">{{ job.templateContent }}</div>
        <footer>
            <ul class="flex flex-wrap gap-2 leading-none text-sm font-sans">{%- for tech in job.data.tech -%}
                <li class="p-2 bg-gray-100 text-gray-800 rounded print:p-0">{{ tech }}</li>
            {%- endfor -%}</ul>
        </footer>
    </li>
{%- endfor -%}
</ul>

## Contact

- <a href="tel:07891799914">07891799914</a>
- <a href="mailto:gmattgreenfield@gmail.com">gmattgreenfield@gmail.com</a>
- <a class="print:hidden" target="__blank" href="https://github.com/mattgreenfield">Github</a>
- <a class="print:hidden" target="__blank" href="https://www.linkedin.com/in/matt-greenfield-43737653/">LinkedIn</a>
