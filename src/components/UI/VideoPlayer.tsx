import Hls from 'hls.js'
import { onMount, ParentProps } from 'solid-js'

interface VideoPlayerProps extends ParentProps {
    source: string
}

export const VideoPlayer = ({ source }: VideoPlayerProps) => {
    onMount(() => {
        if (Hls.isSupported()) {
            const video = document.getElementById('video') as HTMLVideoElement
            const hls = new Hls()
            hls.loadSource(source)
            hls.attachMedia(video)
            hls.on(Hls.Events.MANIFEST_PARSED, () => video.play())
        }
    })

    return <video id="video" class="video-player" controls></video>
}
