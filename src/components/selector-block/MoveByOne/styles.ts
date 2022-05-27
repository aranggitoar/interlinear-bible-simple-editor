/*

Interlinear Bible Simple Editor is a multiplatform interlinear bible translation software.
Copyright (C) 2022  Aranggi J. Toar

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; only version 2 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA. 

*/

import styled from 'styled-components';

export const ButtonContainer = styled.div`
	position: relative;
`;

export const MoveByOneButton = styled.button`
	background: none;
	border: none;
	color: #777;
	font-size: 50px;
	transition: transform 500ms, color 150ms;

	&:hover {
		background: none;
		color: #555;
	}

	&:after,
	&:after {
		background: none;
		content: '';
		height: 150%;
		left: 0;
		position: absolute;
		top: 0;
		width: 150%;
	}

	&#forward {
		margin-left: 2em;
	}

	&#backward {
		margin-right: 2em;
	}

	&#forward:hover {
		transform: translateX(10px);
	}

	&#backward:hover {
		transform: translateX(-10px);
	}
`;
