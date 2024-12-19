import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaFileUpload } from 'react-icons/fa'
import { ShowVideoProps } from '../../../Type/ComponentBasedTypes'
import { Toast } from 'primereact/toast'


const UploadVideo: React.FC<ShowVideoProps> = ({
    handleNoteChange,
    hoveredIndex,
    handleRemoveVideo,
    setHoveredIndex,
    handleVideoChange,
    setVideoVisible,
    VideoRequestDtoList,
    isLoading,
    images,
    toastRef,
}) => {


    const uploadIcon = '/home/thinkpad/Desktop/office/Hepta-Track/hepta-track/public/assets/images/upload.png';



    return (
        <div>
            <Toast ref={toastRef} />
            <div className={` border  mt-6`} style={{ width: "850px" }}>
                <div className="flex justify-center text-center">
                    <div>
                        <input
                            id="file-input"
                            type="file"
                            accept="video/mp4, video/mpeg" 
                            multiple
                            onChange={handleVideoChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <label
                            htmlFor="file-input"
                            style={{
                                width: '20px',
                                height: '120px',
                                fontSize: '0.8rem',
                                paddingLeft: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: "-120px"
                            }}>
                            <div className="mt-12" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                <img src="/assets/images/upload.png" alt="Upload Icon" />
                                <div style={{ textAlign: 'center', width: "220px", color: "#416072" }}>
                                    Drag and drop files here.<br />
                                    All mp4, mpeg pdf types are supported
                                </div>

                            </div>

                        </label>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    {images.length > 0 && (
                        <div className="mt-2">
                            <div className="flex gap-16 flex-wrap">
                                {images?.map((image: string | undefined, index: number) => (
                                    <div
                                        key={index}
                                        style={{ position: 'relative', display: 'inline-block' }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}>
                                        <AiOutlineDelete
                                            onClick={() => handleRemoveVideo(index)}
                                            style={{
                                                position: 'absolute',
                                                top: '165px',
                                                right: '5px',
                                                background: 'red',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                width: '28px',
                                                height: '25px',
                                                cursor: 'pointer',
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                transition: 'opacity 0.3s',
                                            }}
                                        />
                                        <img
                                            src={image}
                                            alt={`Uploaded ${index}`}
                                            style={{
                                                width: '300px',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '0.5rem',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                            }}
                                        />
                                        {/* <div className="mt-2">
                      <InputText
                        value={imageRequestDtoList[index]?.note || ''}
                        onChange={(e) => handleNoteChange(index, e.target.value)}
                        placeholder="Add note"
                        style={{
                          width: '300px',
                          height: '40px',
                          border: '1px solid #D5E1EA',
                          borderRadius: '0.50rem',
                          fontSize: '0.8rem',
                          boxShadow: 'none',
                          paddingLeft: '0.5rem',
                          color: 'black',
                          resize: 'none',
                          marginTop: '10px',
                        }}
                      />
                    </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UploadVideo