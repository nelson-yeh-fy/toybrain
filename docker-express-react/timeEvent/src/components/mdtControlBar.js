import React, { Component } from 'react';

import './../css/main.css';

class MdtControlBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div id="divMdtSidebar" className="main-sidebar">
                    <div id="sideCfsBox" className="col-md-12 sidebarActive" data-target="#tabMdtCfs">
                        <a>
                            <span className="label label-sidebar" id="unitActiveCfsNumber">2</span>
                            <i className="fa icon-mdt_inbox fa-2x" aria-hidden="true" /><br />CFS Box
                        </a>
                    </div>
                    <div id="sideInitCfs" className="col-md-12">
                        <a>
                            <i className="fa icon-mdt_addcase fa-2x" aria-hidden="true" /><br />Init CFS
                        </a>
                    </div>
                    <div id="sideNCIC" className="col-md-12" data-linkfunc="mdtNcicSearch()" data-target="#mdtNCICSearch" data-refresh="true">
                        <a>
                            <i className="fa icon-mdt_searchcase fa-2x" aria-hidden="true" /><br />NCIC
                        </a>
                    </div>
                    <div id="sideChat" className="col-md-12" data-linkfunc="mdtInfoChatting()" data-target="#mdtChat">
                        <a>
                            <i className="fa icon-mdt_msg fa-2x" aria-hidden="true" /><br />Chat
                            <i className="fa fa-circle fa-sm" id="chatting_msg_tip" aria-hidden="true" />
                        </a>
                    </div>
                    <div id="sideMap" className="col-md-12" data-href="/Mapping/InfoMDTMapping.aspx" data-refresh="false" data-target="#mdtMaps">
                        <a>
                            <i className="fa icon-mdt_map fa-2x" aria-hidden="true" /><br />Map
                        </a>
                    </div>
                    <div id="sideRMS" className="col-md-12" data-refresh="false" data-target_bak="#mdtRMS">
                        <a>
                            <i className="fa icon-mdt_goto fa-2x" aria-hidden="true" /><br />RMS
                        </a>
                    </div>
                    <div id="sideSupervisor" className="col-md-12" data-href="" data-refresh="false" data-target="#mdtSupervisor">
                        <a>
                            <i className="fa icon-mdt_supervisor fa-2x" aria-hidden="true" /><br />Super
                        </a>
                    </div>

                    {/*
                    <div id="sideProfile" className="col-md-12" data-href="/CAD/Account/ShowProfile" data-refresh="true" data-target="#mdtProfile">
                    </div>
                    <div id="sideMdtBOLO" className="col-md-12" data-refresh="false" data-target="#MdtBOLO">
                    </div>
                    */}
                </div>
            </div>
        );
    }
}

export default MdtControlBar;
