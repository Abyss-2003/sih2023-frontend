import React, { useState } from "react";
import axios from "axios";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import "../assets/styles/Img_upload_compo.scss";
import { useDispatch } from "react-redux";  //redux-code
import { loadImage, loadExercise } from "../redux/features/imageSlice";   //redux-code


const ImgUploadCompo = (props) => {
  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);
  
  //redux-code
  const dispatch = useDispatch()

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: shortid.generate(),
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile.length > 0) {

      //my-code
      const formData = new FormData();
      formData.append("file", selectedfile[0]);
      // try {
      //   const response = await axios.post(`http://146.190.10.219:8000/predict_to_know_the_exericise`,formData,{
      //     headers : {
      //       'Content-Type' : 'multipart/form-data',
      //       "Access-Control-Allow-Origin" : '*'
      //     }
      //   })
      //   console.log(response);
      //   // if(response.data?.token){
        
      //   // }
      // } catch (error) {
      //   console.log(error);
      // }
      dispatch(loadImage(selectedfile[0]))
      const num = Math.floor(Math.random()*3)
      console.log("num : ", num);
      const arr = ["Deadlift", "Russian Twist", "Shoulder Press"]
      dispatch(loadExercise(arr[num]))
      //my-code

      // for (let index = 0; index < selectedfile.length; index++) {
      //   SetFiles((preValue) => {
      //     return [...preValue, selectedfile[index]];
      //   });
      // }
      // SetSelectedFile([]);
    } else {
      alert("Please select file");
    }
  };

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      SetFiles(result);
    } else {
      // alert('No');
    }
  };

  return (
    <div className="img-upload-bodyy">
      <div className="fileupload-view">
        <div className="row justify-content-center m-0">
          <div className="col-md-50">
            <div className="image-card mt-4">
              <div className="card-body">
                <div className="kb-data-box">
                  <div className="kb-modal-data-title">
                    <div className="kb-data-title">
                      <h6 className="img-upload-heading">Upload your Image here</h6>
                    </div>
                  </div>
                  <form onSubmit={FileUploadSubmit}>
                    <div className="kb-file-upload">
                      <div className="file-upload-box">
                        <input
                          type="file"
                          id="fileupload"
                          className="file-upload-input"
                          onChange={InputChange}
                          multiple
                        />
                        <span>
                          Drag and drop or{" "}
                          <span className="file-link">Choose your files</span>
                        </span>
                      </div>
                    </div>
                    <div className="kb-attach-box mb-3">
                      {selectedfile.map((data, index) => {
                        const {
                          id,
                          filename,
                          fileimage,
                          datetime,
                          filesize,
                        } = data;
                        return (
                          <div className="file-atc-box" key={id}>
                            {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                              <div className="file-image">
                                {" "}
                                <img src={fileimage} alt="" />
                              </div>
                            ) : (
                              <div className="file-image">
                                <i className="far fa-file-alt"></i>
                              </div>
                            )}
                            <div className="file-detail">
                              <h6 className="img-upload-heading">{filename}</h6>
                              <p></p>
                              <p>
                                <span>Size : {filesize}</span>
                                <span className="ml-2">
                                  Modified Time : {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  type="button"
                                  className="file-action-btn"
                                  onClick={() => DeleteSelectFile(id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="kb-buttons-box">
                      <button
                        type="submit"
                        className="btn btn-primary form-submit"
                        style={{borderRadius: '0', margin: 'auto'}}
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                  {Files.length > 0 ? (
                    <div className="kb-attach-box">
                      <hr />
                      {Files.map((data, index) => {
                        const {
                          id,
                          filename,
                          fileimage,
                          datetime,
                          filesize,
                        } = data;
                        return (
                          <div className="file-atc-box" key={index}>
                            {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                              <div className="file-image">
                                {" "}
                                <img src={fileimage} alt="" />
                              </div>
                            ) : (
                              <div className="file-image">
                                <i className="far fa-file-alt"></i>
                              </div>
                            )}
                            <div className="file-detail">
                              <h6 className="img-upload-heading">{filename}</h6>
                              <p>
                                <span>Size : {filesize}</span>
                                <span className="ml-3">
                                  Modified Time : {datetime}
                                </span>
                              </p>
                              <div className="file-actions">
                                <button
                                  className="file-action-btn"
                                  onClick={() => DeleteFile(id)}
                                >
                                  Delete
                                </button>
                                <a
                                  href={fileimage}
                                  className="file-action-btn"
                                  download={filename}
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgUploadCompo;
