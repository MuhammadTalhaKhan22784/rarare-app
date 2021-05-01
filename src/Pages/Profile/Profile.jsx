import React, { useState, useLayoutEffect } from "react";
import Button from "../../Components/Btn/Btn";
import ProfileCard from "../../Components/ProfileComp/ProfileCard";
import TopicHead from "../../Components/ProductComp/TopicHead";
import IssueCard from "../../Components/ProductComp/IssueCard";
import ProSurveyCard from "../../Components/ProductComp/ProSurveyCard";
import ProfileProposalCard from "../../Components/ProfileComp/ProfileProposalCard";
import ProductProposalCard from "../../Components/ProductComp/ProductProposalCard";
import { SurveyCard } from "./CardData";
import grid from "../../Assets/Group 3602.png";
import listG from "../../Assets/list.png";
import gridG from "../../Assets/grid.png";
import liW from "../../Assets/liW.png";
import "./Profile.css";

const Profile = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  let [post, setPost] = useState("");
  let [list, setList] = useState(false);

  const handlePost = (e) => {
    setPost(e);
  };

  const handleGrid = (e) => {
    setList(e);
  };

  return (
    <div>
      <div className="main_profile_com">
        <div className="profile_card_comp_div">
          <ProfileCard />
        </div>
        <div className="posts_ccard_div">
          <div className="posts_btn_div">
            <Button
              onClick={() => handlePost("issues")}
              className={post === "issues" ? `grn_bg` : "your_post_btn"}
              value="Your Issues"
            />
            <Button
              onClick={() => handlePost("survey")}
              className={
                post === "survey" ? `grn_bg btn_left` : "your_post_btn btn_left"
              }
              value="Your Survey"
            />
            <Button
              onClick={() => handlePost("proposal")}
              className={
                post === "proposal"
                  ? `grn_bg btn_left`
                  : "your_post_btn btn_left"
              }
              value="Your Proposals"
            />
          </div>
          {post === "issues" ? (
            <>
              <div className="head_div">
                <TopicHead
                  head="Your Issues"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> issues in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="list_card_veiw">
                <img
                  onClick={() => handleGrid(false)}
                  src={!list ? grid : gridG}
                  alt="img"
                />
                <img
                  onClick={() => handleGrid(true)}
                  src={list ? listG : liW}
                  alt="img"
                />
              </div>
              <div className="your_issues_card_div">
                <IssueCard list={list} togleImg={true} className="width" />
              </div>
            </>
          ) : post === "survey" ? (
            <>
              <div className="head_div">
                <TopicHead
                  head="Your Surveys"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> surveys in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="list_card_veiw">
                <img
                  onClick={() => handleGrid(false)}
                  src={!list ? grid : gridG}
                  alt="img"
                />
                <img
                  onClick={() => handleGrid(true)}
                  src={list ? listG : liW}
                  alt="img"
                />
              </div>
              <div className="your_issues_card_div">
                <ProSurveyCard
                  list={list}
                  data={SurveyCard.current_user}
                  className="width_proposal"
                  left="btn_left"
                  togleImg={true}
                />
              </div>
            </>
          ) : post === "proposal" ? (
            <>
              <div className="head_div">
                <TopicHead
                  head="Your Proposals"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> proposals in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="list_card_veiw">
                <img
                  onClick={() => handleGrid(false)}
                  src={!list ? grid : gridG}
                  alt="img"
                />
                <img
                  onClick={() => handleGrid(true)}
                  src={list ? listG : liW}
                  alt="img"
                />
              </div>
              <div className="your_issues_card_div desktop_proposal">
                <ProfileProposalCard list={list} className="width_proposal" />
              </div>
              <div className="mobProposalCard">
                <ProductProposalCard list={list} />
              </div>
            </>
          ) : (
            <>
              <div className="head_div">
                <TopicHead
                  head="Your Issues"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> issues in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="your_issues_card_div">
                <IssueCard className="width" />
              </div>
              <div className="head_div">
                <TopicHead
                  head="Your Surveys"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> surveys in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="your_issues_card_div">
                <ProSurveyCard
                  data={SurveyCard.current_user}
                  className="width_proposal"
                  left="btn_left"
                />
              </div>
              <div className="head_div">
                <TopicHead
                  head="Your Proposals"
                  button={
                    <Button
                      className="reportProblm_btn"
                      value="Report a problem"
                    />
                  }
                />
                <p className="textGrey">
                  You have posted <strong> "2" </strong> proposals in tha last{" "}
                  <strong> 30 </strong> days
                </p>
              </div>
              <div className="your_issues_card_div desktop_proposal">
                <ProfileProposalCard className="width_proposal" />
              </div>
              <div className="mobProposalCard ">
                <ProductProposalCard list={list} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
