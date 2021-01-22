const  createAnalitics = (): object => {
    let counter = 0;
    let isDestroyed: boolean = false;

    const listener = ():number => counter++;
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            return isDestroyed ? 'Analitics is destriyed' : counter;
        },
    }
};

window['analitics'] = createAnalitics();