// Entry Point
import { routes } from 'navigator';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; 

const Main = () => {
	return (
		<React.Fragment>
			<Suspense fallback={<>Loading...</>}>

				<Routes>
					{
						routes?.map(route => {
							return <Route path={route?.path} element={route?.element} />;
						})
					}
				</Routes>

			</Suspense>
		</React.Fragment>
	)
}

export default Main;