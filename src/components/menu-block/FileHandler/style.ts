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

export const FileHandlerButton = styled.label`
	align-items: center;
	border: 0;
	background: none;
	display: flex;
	font-size: 16px;
	font-weight: 400 !important;
	height: 2em;
	justify-content: center;
	text-transform: uppercase;
	transition: all 500ms;
	pointer: cursor;
	width: 4em;
`;

export const InvisibleInput = styled.input`
	height: 0.1px;
	width: 0.1px;
	opacity: 0;
`;

export const Container = styled.div`
	background: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0.1em 0.2em;

	&:hover {
		background: #f2f2f2;
	}
`;
