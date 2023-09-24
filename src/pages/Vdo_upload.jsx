import React from 'react'
import WebcamStreamCapture from '../components/WebcamStreamCapture'
import '../assets/styles/Img_upload_compo.scss'

function Vdo_upload() {
  return (
    <div class="upload">
    <div class="item-iu left" >
    <WebcamStreamCapture/>
    </div>
    <div class="item-iu right">
      <h2>Flexbox - Split Screen Layout</h2>
      <p>Example of a split screen layout that uses flexbox.</p>
      <p>A media query is used to detect if the virewport is below 600px, if it is then <b>flex-direction</b> is set to column-reverse, so that the image is displayed after the copy, useful on mobile devices!.</p>
      <p>Reduce the window size to below 600px to see an example.</p>
    </div>
    
  </div>
  )
}

export default Vdo_upload
