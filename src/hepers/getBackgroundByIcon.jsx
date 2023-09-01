import backgrounds from "./background.json";

export const getBackgroundByIcon = async (iconUrl) => {
    const bgData = findByIcon(iconUrl);
    const currentDeviceType = DeviceType();
    const currentPixelRatio = PixelRatio();
    const format = await supportsWebP() ? 'backgroundWebp' : 'backgroundJpg';

    return bgData[format][currentDeviceType][currentPixelRatio];
};

function findByIcon(iconUrl) {
    const bgItem = backgrounds.find(bg => bg.icon === iconUrl);
    return bgItem;
}

function DeviceType() {
    const width = window.innerWidth;
    if (width <= 480) {
        return 'mobile';
    } else if (width <= 768) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

function PixelRatio() {
    const ratio = window.devicePixelRatio;
    if (ratio > 1.5) {
        return '2x';
    } else {
        return '1x';
    }
}

function supportsWebP() {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    });
}