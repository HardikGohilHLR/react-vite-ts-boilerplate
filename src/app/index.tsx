// Entry Point
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { routes } from 'navigator';

const Main = () => {
	return (
		<React.Fragment>
			<Suspense fallback={<>Loading...</>}>

				<Routes>
					{
						routes?.map(route => {
							return <Route path={route?.path} key={route?.path} element={route?.element} />;
						})
					}
				</Routes>

			</Suspense>
		</React.Fragment>
	)
}

export default Main;