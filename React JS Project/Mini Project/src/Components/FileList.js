import React from 'react'
import PropTypes from 'prop-types'
import './FileList.css'
import moment from 'moment'

export default function FileList({files}) {
    return (
        <table className="fileList">
            <tbody>
                {files.map(file => 
                    <FileListItem key={file.id} file={file}/>
                )}
            </tbody>
        </table>
    )
}

FileList.propTypes = {
    files : PropTypes.array
};

// FileListItem component
const FileListItem = ({file}) =>  (
    <tr className="fileListItem">
        <td className="fileName"><FileName file={file}/></td>
        <td className="commitMessage"><Message  commitMessage={file.latestCommit.message} /></td>
        <td className="time"><Time time={file.updated_at}/></td>
    </tr>
    ) 

FileListItem.propTypes = {
    file :PropTypes.object.isRequired
}

// Name >icon Component

const FileName = ({file}) => (
    <>
       <i className={'fileIcon fa fa-'+file.type}></i>&nbsp;
        {file.name}
    </>
)

// Message Component
const Message = ({commitMessage}) => <>{commitMessage}</>

Message.propTypes = {
    commitMessage : PropTypes.string.isRequired,
}

// Time Component
const Time = ({time}) =>{ 
const timestring = moment(time).fromNow()
return <>{timestring}</>
}

Time.propTypes = {
    commitMessage : PropTypes.string.isRequired,
}

