import React, { Component } from 'react';
import classnames from 'classnames';
import Loading from './Loading';
class Dashboard extends Component {
	state = { loading: true };

  const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];


	render() {
		const dashboardClasses = classnames('dashboard');

		if (this.state.loading) {
			return <Loading />;
		}

		return <main className={dashboardClasses} />;
	}
}

export default Dashboard;
