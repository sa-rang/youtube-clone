import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://picsum.photos/300/300"
        channel="Sa-Rang"
        verified
        subs="660K"
        noOfVideos="328"
        description="blah vlah desc"
      />
      <hr />
      <VideoRow
        views="2.3M"
        subs="660K"
        description="blah vlah desc"
        timestamp="2 days ago"
        channel="Sa-Rang"
        title="YT Clone"
        image="https://picsum.photos/350/300"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        description="blah vlah desc"
        timestamp="2 days ago"
        channel="Sa-Rang"
        title="YT Clone"
        image="https://picsum.photos/350/300"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        description="blah vlah desc"
        timestamp="2 days ago"
        channel="Sa-Rang"
        title="YT Clone"
        image="https://picsum.photos/350/300"
      />
    </div>
  );
}

export default SearchPage;
