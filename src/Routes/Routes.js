import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../Pages/Forms/Signup";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Login from "../Pages/Forms/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
// import Home from "../Pages/home/home";
// import BusinessUploadImg from "../Pages/Bussinus/upload_img";
// import Forget from "../Pages/Forms/forget";
// import TermAndCond from "../Pages/termAndCond/termAndCond";
// import Blog from "../Pages/blogs/blog";
// import SelectBlog from "../Pages/blogs/oneBlogPage";
import PostHome from "../Pages/Post/PostHome";
import PostReport from "../Pages/Post/PostReport";
import PostReceive from "../Pages/Post/PostReceive";
import PostProposal from "../Pages/PostConsensus/PostProposal";
import PostConLoc from "../Pages/PostConsensus/PostConLoc";
import PostConOpt from "../Pages/PostConsensus/PostConOpt";
import Extra from "../Extra";
import PostConsensusTime from "../Pages/PostConsensus/PostConsensusTime";
import PostConsensusReceive from "../Pages/PostConsensus/PostConsensusReceive";
import Rant from "../Pages/Rant/Rant";
import Proposal from "../Pages/Proposal/Proposal";
import ParticipatoryBudget from "../Pages/ParticipatoryBudget/ParticipatoryBudget";
import PartBudgetDetails from "../Pages/ParticipatoryBudget/PartBudgetDetails";
import Home from "../Pages/Home/Home";
import Forget from "../Pages/Forms/forget";
import TermAndCond from "../Pages/TermAndCond/TermAndCond";
import Blog from "../Pages/Blogs/Blog";
import SelectBlog from "../Pages/Blogs/OneBlogPage";
import Product from "../Pages/Products/Product";
import Authority from "../Pages/Bussinus/Authority";
import BusinessInfo from "../Pages/Bussinus/BusinessInfo";
import BusinessUploadImg from "../Pages/Bussinus/Upload_img";
import AuthorityInfo from "../Pages/Bussinus/AuthorityInfo";
import ConfirmRegistration from "../Pages/Bussinus/ConfirmRegistraion";
import Profile from "../Pages/Profile/Profile";
import AccountSetting from "../Pages/Profile/AccountSetting";
import ProfileSetting from "../Pages/Profile/ProfileSetting";
import SecuritySetting from "../Pages/Profile/SecuritySetting";
import NotificationSetting from "../Pages/Profile/NotificationSetting";
import Survey from "../Pages/Survey/Survey";
import PostSurveyTemplate from "../Pages/PostSurvey/PostSurveyTemplate";
import SurveyHealth from "../Pages/PostSurvey/SurveyHealth";
import PostSurveyLocation from "../Pages/PostSurvey/PostSurveyLocation";
import PostSurveyReward from "../Pages/PostSurvey/SurveyReward";
import PostSurveyReceive from "../Pages/PostSurvey/PostSurveyReceive";
import SurveyListPage from "../Pages/Survey/SurveyListPage";
import PostUploadImg from "../Pages/Post/PostUploadImg";
import ParticipatoryTime from "../Pages/ParticipatoryBudget/ParticipatoryTime";
import PartBudgetBenefits from "../Pages/ParticipatoryBudget/PartBudgetBenefits";
import Participate from "../Pages/Participate/Participate";
const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/extra">
            <Extra />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/_pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/post">
            <PostHome />
          </Route>
          <Route exact path="/post-upload">
            <PostUploadImg />
          </Route>
          <Route exact path="/post-report">
            <PostReport />
          </Route>
          <Route exact path="/post-receive">
            <PostReceive />
          </Route>
          <Route exact path="/consensus">
            <PostProposal />
          </Route>
          <Route exact path="/consensus-report">
            <PostConLoc />
          </Route>
          <Route exact path="/consensus-options">
            <PostConOpt />
          </Route>
          <Route exact path="/consensus-time">
            <PostConsensusTime />
          </Route>
          <Route exact path="/consensus-receive">
            <PostConsensusReceive />
          </Route>

          <Route exact path="/proposal">
            <Proposal />
          </Route>
          <Route exact path="/rant">
            <Rant />
          </Route>
          <Route exact path="/participatory">
            <ParticipatoryBudget />
          </Route>
          <Route exact path="/participatory-budget">
            <PartBudgetDetails />
          </Route>
          <Route exact path="/participatory-benefits">
            <PartBudgetBenefits />
          </Route>
          <Route exact path="/participatory-time">
            <ParticipatoryTime />
          </Route>
          <Route exact path="/" component={Home} />
          <Route path="/forget" component={Forget} />
          <Route path="/terms" component={TermAndCond} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={SelectBlog} />
          <Route path="/product" component={Product} />
          <Route path="/business-authority" component={Authority} />
          {/*  */}
          <Route path="/business-info" component={BusinessInfo} />
          <Route path="/business-logo" component={BusinessUploadImg} />
          <Route path="/authority-info" component={AuthorityInfo} />
          <Route path="/business-confirm" component={ConfirmRegistration} />
          {/*  */}
          <Route path="/profile" component={Profile} />
          {/*  */}
          <Route path="/account-setting" component={AccountSetting} />
          <Route path="/profile-setting" component={ProfileSetting} />
          <Route path="/security-setting" component={SecuritySetting} />
          <Route path="/notification-setting" component={NotificationSetting} />
          <Route exact path="/survey/:id" component={Survey} />
          <Route exact path="/survey/:id/:id" component={SurveyListPage} />
             {/*  */}
          <Route path="/post-survey-tamplate" component={PostSurveyTemplate} />
          {/*  */}
          <Route path="/survey-health" component={SurveyHealth} />
          <Route path="/survey-location" component={PostSurveyLocation} />
          <Route path="/survey-reward" component={PostSurveyReward} />
          <Route path="/survey-submit" component={PostSurveyReceive} />
          <Route path="/participate" component={Participate} />
          {/*  */}
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
