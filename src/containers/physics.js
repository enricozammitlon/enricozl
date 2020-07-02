import React, { Component } from "react";
import '../css/module.css';
import Section from '../components/section'

export default class Physics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentActive: "Aims",
      active: { "Aims": 1, "Credits": 0, "Prerequisites": 0, "Lecturer/s": 0, "Followup Courses": 0, "Structure": 0, "Assesment": 0, "Textbooks": 0, "Syllabus": 0 },
      modules: [],
      direction: "up",
      currentId: ""
    }
    var xmlhttp = new XMLHttpRequest();
    var oldThis = this;
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // document.getElementById("result").innerHTML=this.responseText;
        var result = JSON.parse(this.responseText)

        oldThis.setState({
          modules: result,
          currentId: result[0]['id']
        })
      }
    };

    xmlhttp.open("GET", "https://modules-api-253412.firebaseapp.com/api/v1/modules", true);
    xmlhttp.send();
  }

  componentDidMount() {
    this.setState({
      currentId: "",
      result: ""
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currentActive !== this.state.currentActive || prevState.currentId !== this.state.currentId) {
      this.getRequestedInfo()
    }
  }

  handleSelect = e => {
    this.setState({
      currentId: e.target.parentNode.id
    })

  }

  renderModuleRow() {
    var content = []
    var modules = this.state.modules
    for (var i = 0; i <= modules.length - 1; i++) {
      content.push(<tr id={modules[i]['id']} onClick={this.handleSelect}>
        <td data-th="Module-ID">{modules[i]['id']}</td>
        <td data-th="Name">{modules[i]['name']}</td>
        <td data-th="Year">{modules[i]['year']}</td>
      </tr>);
    }
    return content
  }
  /*

            <tr>
              <td data-th="Module-ID">COMP 14112</td>
              <td id="COMP14112" data-th="Name">Fund. of Artificial Intelligence</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10071</td>
              <td  id="PHYS10071" data-th="Name">Mathematics 1</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10101</td>
              <td  id="PHYS10101" data-th="Name">Dynamics</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10121</td>
              <td id="PHYS10121"  data-th="Name">Quantum Physics and Relativity</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10191</td>
              <td id="PHYS10191"  data-th="Name">Introduction to Astrophysics</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10280</td>
              <td id="PHYS10180"  data-th="Name">Year 1 Laboratory</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10302</td>
              <td id="PHYS10302"  data-th="Name">Vibrations and Waves</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10342</td>
              <td id="PHYS10342"  data-th="Name">Electricity & Magnetism</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10352</td>
              <td  id="PHYS10352" data-th="Name">Properties of Matter</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10372</td>
              <td id="PHYS10372" data-th="Name">Mathematics 2</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10471</td>
              <td id="PHYS10471" data-th="Name">Random Processes in Physics</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 10672</td>
              <td id="PHYS10672" data-th="Name">Advanced Dynamics</td>
              <td data-th="Year">1</td>
            </tr>
            <tr>
              <td data-th="Module-ID">MATH 20122</td>
              <td id="MATH20122" data-th="Name">Metric Spaces</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20040</td>
              <td id="PHYS20040" data-th="Name">General Paper I</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20101</td>
              <td id="PHYS20101" data-th="Name">Intro. to Quantum Mechanics</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20141</td>
              <td id="PHYS20141" data-th="Name">Electromagnetism</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20161</td>
              <td id="PHYS20161"data-th="Name">Intro. to Programming for Physicists</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20171</td>
              <td id="PHYS20171"data-th="Name">Mathematics of Waves and Fields</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20252</td>
              <td id="PHYS20252"data-th="Name">Fundamentals of Solid State Physics</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20280</td>
              <td id="PHYS20280" data-th="Name">Year 2 Laboratory</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20312</td>
              <td id="PHYS20312" data-th="Name">Wave Optics</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20352</td>
              <td id="PHYS20352" data-th="Name">Thermal & Stat. Physics</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20401</td>
              <td id="PHYS20401" data-th="Name">Lagrangian Dynamics</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20672</td>
              <td id="PHYS20672" data-th="Name">Complex Vars. & Vector Spaces</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20872</td>
              <td id="PHYS20872" data-th="Name">Theory Computing Project</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 20811</td>
              <td id="PHYS20811" data-th="Name">Professional Development</td>
              <td data-th="Year">2</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30121</td>
              <td id="PHYS30121" data-th="Name">Introduction to Particle and Nuclear Physics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30151</td>
              <td id="PHYS30151" data-th="Name">Thermal Physics of Bose and Fermi Gases</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30180</td>
              <td id="PHYS30180" data-th="Name">Third Year Laboratory</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30201</td>
              <td id="PHYS30201" data-th="Name">Fundamentals of Quantum Mechanics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30441</td>
              <td id="PHYS30441" data-th="Name">Electrodynamics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30471</td>
              <td id="PHYS30471" data-th="Name">Introduction to Non-Linear Dynamics</td>
              <td data-th="Year">3</td>
            </tr>

            <tr>
              <td data-th="Module-ID">COMP 39112</td>
              <td id="COMP39112" data-th="Name">Quantum Computing</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30672</td>
              <td id="PHYS30672" data-th="Name">Mathematical Methods for Physics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 40202</td>
              <td id="PHYS40202" data-th="Name">Advanced Quantum Mechanics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 30392</td>
              <td id="PHYS30392" data-th="Name">Cosmology</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 40352</td>
              <td id="PHYS40352" data-th="Name">Solid State Physics</td>
              <td data-th="Year">3</td>
            </tr>
            <tr>
              <td data-th="Module-ID">PHYS 40222</td>
              <td id="PHYS40222" data-th="Name">Particle Physics</td>
              <td data-th="Year">3</td>
            </tr>
  */

  compareDescending = (a, b) => {
    if (a['year'] > b['year']) {
      return -1
    }
    else if (a['year'] < b['year']) {
      return 1
    }
    else {
      return 0
    }
  }

  compareAscending = (a, b) => {
    if (a['year'] < b['year']) {
      return -1
    }
    else if (a['year'] > b['year']) {
      return 1
    }
    else {
      return 0
    }
  }

  reOrder = e => {
    var oldOrder = this.state.modules;
    var newOrder;
    if (e.target.className === "fa fa-chevron-down") {
      newOrder = [...oldOrder].sort(this.compareAscending)
      this.setState({
        direction: "up",
        modules: newOrder
      })
    }
    else {
      newOrder = [...oldOrder].sort(this.compareDescending)
      this.setState({
        direction: "down",
        modules: newOrder
      })
    }
  }

  renderTable() {

    return (
      <table id="tab" class="rwd-table">
        <thead>
          <tr>
            <th>Module ID</th>
            <th>Name <i id="showInfoText" className="fa fa-info-circle" style={{ "font-size": "20px" }}></i></th>
            <th id="sortYear">Year <i onClick={this.reOrder} id="sortYearIcon" class={"fa fa-chevron-" + this.state.direction}></i> </th>
          </tr>
        </thead>
        <tbody>
          {this.renderModuleRow()}
        </tbody>
      </table>
    );
  }

  getRequestedInfo = e => {
    var xmlhttp = new XMLHttpRequest();
    var oldThis = this;
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // document.getElementById("result").innerHTML=this.responseText;
        var result = JSON.parse(this.responseText)
        var currentSection = oldThis.state.currentActive
        const mapping = { 'Aims': 'aims', 'Credits': 'credits', 'Prerequisites': 'prereq', 'Lecturer/s': 'lecturer', 'Structure': 'classes', "Followup Courses": "followup", "Syllabus": "syllabus", "Textbooks": "txtbooks", "Assesment": "assesment" }
        try {
          oldThis.setState({
            result: result['data'][mapping[currentSection]]
          })
        }
        catch{
          console.log("API couldn't be reached.")
        }
      }
    };

    xmlhttp.open("GET", "https://modules-api-253412.firebaseapp.com/api/v1/modules/" + this.state.currentId, true);
    xmlhttp.send();
  }


  toggle = (toggle, name) => {
    var oldActive = this.state.active
    if (this.state.currentActive !== name) {
      oldActive[name] = 1
      oldActive[this.state.currentActive] = 0

      this.setState({
        active: oldActive,
        currentActive: name
      })
    }
  }

  showSections = e => {
    var content = []
    var sections = this.state.active
    for (var i = 0; i <= Object.keys(sections).length - 1; i++) {
      var sect = Object.keys(sections)[i];
      content.push(<Section text={Object.keys(sections)[i]} active={this.state.active[sect]} toggle={this.toggle} />);
    }
    return content
  }

  renderList = (list) => {
    var content = [];
    for (var i = 0; i <= list.length - 1; i++) {
      content.push(<li>{list[i]}</li>);
    }
    return content
  }

  renderInfo() {
    return (
      <div id="abstract" class="abstract">
        <div class="wrapper">
          <div class="grid clearfix">
            <div class="right">
              <div class="content">
                <div class="tab-content">
                  <ul class="list-inline clearfix">
                    {this.showSections()}
                  </ul>
                  <p id="result">{typeof (this.state.result) === 'object' ? this.renderList(this.state.result) : this.state.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>My Physics Portfolio</h2>
        <p>I am currently in my final and fourth year of studies in (MPhys) Physics with Theoretical Physics. The following are the modules I have attended at university.<br></br>
        Please click on the name of a module to see information about it. More modules will be added soon.</p>
        <div className="panel">
          {this.renderInfo()}
          {this.renderTable()}
        </div>
      </div>
    );
  }
}