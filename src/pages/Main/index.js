import React, { useState } from "react";
import { Header, Title, Menu, Content, Welcome, ContentMain, DownloadArea, Error, PreviewArea, PreviewAreaImg, PreviewAreaDescription, PreviewAreaDescriptDown } from './style';
import { SiYoutubetv } from 'react-icons/si';
import Loader from 'react-loader-spinner';
import { getLinkPreview } from 'link-preview-js';
import { BsCloudDownload } from 'react-icons/bs';

const Main = () => {
    const [loading, setLoading] = useState("");
    const [link, setLink] = useState("");
    const [error, setError] = useState("");
    const [dataPreview, setDataPreview] = useState("");

    async function previewVideo() {
        setLoading(true);
        if (!link) {
            setError('Insert your youtube link!');
        }

        const data = await getLinkPreview(link);
        setDataPreview(data);
        setLoading(false);
        console.log(data);
    }

    async function downloadVideo(link, type, name) {
        const typeDownload = type === 1 ? 'mp3' : 'mp4';
        //window.location.href = `http://localhost:4000/download?URL=${link}&type=${typeDownload}&name=${name}`;
        window.open(`http://localhost:4000/download?URL=${link}&type=${typeDownload}&name=${name}`, '_blank');
        //window.location.reload();
    }

    return (
        <>
            <Header>
                <Title>
                    <SiYoutubetv /> 
                    <h5>
                        <strong>BYT</strong>
                        Downloader.
                    </h5>
                </Title>

                <Menu>
                    <p>My recents downloads</p>
                </Menu>
            </Header>


            <Content>
                <ContentMain>
                    <Welcome>
                        <h5>YOUTUBE DOWNLOADER ✅</h5>
                        <h1>Simple, practical, fast and without bureaucracy! 🚀</h1>
                    </Welcome>

                    <DownloadArea>
                        <input type="text" onChange={(e) => setLink(e.target.value)} placeholder="https://www.youtube.com/watch?v=E4il98XQxjo&ab_channel=VESGO" />
                        <button onClick={() => previewVideo()}>
                            {loading ? <Loader
                                type="TailSpin"
                                color="#FFF"
                                height={30}
                                width={30}
                                visible={loading}
                            /> :
                                <span>
                                    Download
                                </span>}
                        </button>
                    </DownloadArea>
                    {error && <Error>{error}</Error>}
                    {dataPreview && 
                        <PreviewArea>
                            <PreviewAreaImg>
                                <img src={dataPreview.images[0]} />
                            </PreviewAreaImg>
                            <PreviewAreaDescription>
                                <h4>{dataPreview.title}</h4>
                                <p>{dataPreview.description}</p>
                                <PreviewAreaDescriptDown>
                                    <button onClick={() => downloadVideo(dataPreview.url, 1, dataPreview.title)}>
                                        <BsCloudDownload size={20} /> <span>Mp3 (Music) </span>
                                    </button>
                                <button onClick={() => downloadVideo(dataPreview.url, 2, dataPreview.title)}>
                                        <BsCloudDownload size={20} /> <span>Mp4 (Video)</span>
                                    </button>
                                </PreviewAreaDescriptDown>
                            </PreviewAreaDescription>
                        </PreviewArea>
                    }
                </ContentMain>
            </Content>

            {/* <ContentTest>
                <Test>
                    <input type="text"/>
                </Test>
            </ContentTest> 
            
            <h4>{dataPreview.title}</h4>
                            <label>teste</label>
                            <select name="" id="">

                            </select>
            */}

        </>
    )
}

export default Main;