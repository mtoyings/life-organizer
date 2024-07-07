import React from 'react'
import "./Tag.css"

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },

    }
    // console.log("props: ", props)
    // need to put button type because default is submit which just want ordinary button
    return < button
        type="button"
        className='tag'
        onClick={() => selectTag(tagName)}
        style={selected ? tagStyle[tagName] : tagStyle.default}
    >
        {tagName}
    </button >

}

export default Tag