import onetime from 'onetime'

import('@material/mwc-fab/mwc-fab.js').then(() => {
    document.body.classList.remove('unresolved');
})

const loadMap = onetime(async () => {
    await import('@openlayers-elements/core/ol-map.js')
    // import('@openlayers-elements/maps/ol-overlay.js')
    import('@openlayers-elements/maps/ol-layer-openstreetmap.js')
    import('@openlayers-elements/core/ol-layer-vector.js')
    import('@openlayers-elements/maps/ol-marker-icon.js')
})

const mapObserver = new IntersectionObserver((changes) => {
    if (changes.some(change => change.intersectionRatio > 0)) {
        loadMap()
    }
})

document.querySelectorAll('ol-map')
    .forEach(el => mapObserver.observe(el))
