import { type Component } from 'solid-js'
import { VideoPlayer } from '../components/UI/VideoPlayer'

export const MainPage: Component = () => {
    const demoVideoSource =
        'https://stream.voidboost.cc/dcf559f0d738a698d7c38c585d77265f:2024010615:f34a537a-3231-4201-bfaa-e33a9dc00d7e/9/7/6/8/2/2/qgns2.mp4:hls:manifest.m3u8'

    return (
        <div class="container">
            <VideoPlayer source={demoVideoSource} />
        </div>
    )
}
