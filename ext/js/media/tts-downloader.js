/*
 * Copyright (C) 2023-2024  Yomitan Authors
 * Copyright (C) 2020-2022  Yomichan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export class TextToSpeechDownloader {
    /**
     * @param {import('audio-downloader').AudioSystem} audioSystem
     */
    constructor(audioSystem) {
        /** @type {import('audio-downloader').AudioSystem} */
        this._audioSystem = audioSystem;
    }

    /**
     * @param {string} text
     * @param {string} voice
     * @param {number | null} idleTimeout
     * @returns {Promise<import('audio-downloader').AudioBinaryBase64>}
     */
    async _downloadTTS(text, voice, idleTimeout) {
        try {
            const audio = displayAudio._audioSystem.createTextToSpeechAudio(text, voice);
            audio.volume = 0;
            await audio.play();
        } catch (error) {
            console.error(error);
        }
        debugger;
    }
}
