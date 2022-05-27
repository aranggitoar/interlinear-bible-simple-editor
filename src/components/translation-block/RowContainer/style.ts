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

export const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 0.5em;
	margin: 0 0.5em;
`;

export const RowContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0.15em 0;
	max-width: 135px;

	&.strongs {
		color: #4444dd;
	}

	&.original-language {
		font-size: 1.5em;
	}

	&.morphology {
		color: #555555;
		text-align: center;
	}
`;

export const TranslationInputField = styled.textarea`
	border: 1px dashed rgb(188, 186, 184) !important;
	border-radius: 2.5px !important;
	color: #dd4444 !important;
	height: 2em;
	padding: 0.1em 0.4em;
	resize: none;
	width: 10em;

	&:hover {
		border: 1px dashed rgb(142, 140, 138) !important;
	}
`;
