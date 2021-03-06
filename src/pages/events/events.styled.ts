import { flexCenter, fullPage, scrollbar } from "./../../styled.common";
import styled from "styled-components";

export const Container = styled.div`
	${fullPage};
`;
export const Title = styled.h2`
	transition: all 0.3s ease 0s;
	color: white;
	padding: 10px 0px;
	border-bottom: 1px solid white;
	text-align: center;
`;

export const Body = styled.main`
	display: flex;
	margin: 0px auto;
	width: 95%;
	height: 80%;
	padding: 20px 0px 0px 0px;
`;
export const Column = styled.div`
	border: 1px solid white;
	flex: 33%;
	:hover {
		${Title} {
			border-color: red;
		}
	}
`;

export const ListEvents = styled.div`
	overflow-y: auto,
    ${scrollbar};
`;

export const Label = styled.p`
	line-height: 1;
	padding: 0px 0px 0px 0px;
	margin: 0px 0px 0px 0px;
	max-width: 400px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Item = styled.div`
	cursor: pointer;
	transition: all 0.3s ease 0s;
	${flexCenter};
	justify-content: space-between;
	:hover {
		background-color: white;
		${Label} {
			color: black;
		}
	}
	padding: 10px;
`;
