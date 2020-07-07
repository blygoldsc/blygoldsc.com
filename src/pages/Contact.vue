<template>
    <Layout>
        <main class="mx-6 text-2xl mt-16 mb-4 md:mt-0 md:mb-16 md:flex flex-col md:mx-auto md:flex-row items-center justify-center md:w-full self-center">
            <div class="text-center md:text-right md:mx-8">
                <h1 class="text-4xl font-semibold">CONTACT US</h1>
                <p class="mt-2">blygoldsc@gmail.com</p>
                <p>(843) 557-5987</p>
            </div>
            <svg width="260" height="307" viewBox="0 0 260 307" fill="none" xmlns="http://www.w3.org/2000/svg" id="dots-black" class="px-4 py-16 mx-auto md:py-0 md:mx-8">
                <circle cx="105.986" cy="58.8812" r="11.7762" />
                <circle cx="105.986" cy="105.986" r="11.7762" />
                <circle cx="153.091" cy="105.986" r="11.7762" />
                <circle cx="153.091" cy="58.8812" r="11.7762" />
                <circle cx="105.986" cy="11.7762" r="11.7762" />
                <circle cx="153.091" cy="11.7762" r="11.7762" />
                <circle cx="200.196" cy="58.8812" r="11.7762" />
                <circle cx="200.196" cy="105.986" r="11.7762" />
                <circle cx="247.301" cy="105.986" r="11.7762" />
                <circle cx="247.301" cy="58.8812" r="11.7762" />
                <circle cx="105.986" cy="153.091" r="11.7762" />
                <circle cx="153.091" cy="153.091" r="11.7762" />
                <circle cx="200.196" cy="153.091" r="11.7762" />
                <circle cx="200.196" cy="200.196" r="11.7762" />
                <circle cx="153.091" cy="200.196" r="11.7762" />
                <circle cx="105.986" cy="200.196" r="11.7762" />
                <circle cx="58.8812" cy="153.091" r="11.7762" />
                <circle cx="58.8812" cy="105.986" r="11.7762" />
                <circle cx="58.8812" cy="200.196" r="11.7762" />
                <circle cx="58.8812" cy="247.301" r="11.7762" />
                <circle cx="105.986" cy="247.301" r="11.7762" />
                <circle cx="153.091" cy="247.301" r="11.7762" />
                <circle cx="200.196" cy="247.301" r="11.7762" />
                <circle cx="153.091" cy="294.406" r="11.7762" />
                <circle cx="105.986" cy="294.406" r="11.7762" />
                <circle cx="58.8812" cy="294.406" r="11.7762" />
                <circle cx="11.7762" cy="294.406" r="11.7762" />
            </svg>
        </main>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Contact'
    },
    data() {
        return {
            interval: null
        }
    },
    methods: {
        transitionDot(dotElement) {
            dotElement.classList.add('active')
            setTimeout(() => dotElement.classList.remove('active'), 750)
        },
        animateDots(dotElements) {
            const dotIndex = Math.floor(Math.random() * (dotElements.length - 1))
            this.transitionDot(dotElements[dotIndex])
        }
    },
    mounted() {
        const dotElements = document.querySelectorAll("#dots-black > circle")
        setInterval(() => this.animateDots(dotElements), 250)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style lang="sass" scoped>
#dots-black > circle
    fill: #ddd
    transition: fill 0.4s ease, opacity 0.2s ease

    &.active
        fill: #ffba00

    &:hover
        opacity: 35%
</style>