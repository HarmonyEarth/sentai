import { Member, Team } from '../models/types';

interface Props {
  members: Member[];
  teams: Team[];
}

type MembersByYearType = Member & {
  year: string;
};

export const sortMembersByYear = ({ members, teams }: Props) => {
  let membersByYear: MembersByYearType[] = [];

  members.forEach((member) => {
    const grabTeam = teams.find((element) => element.teamId === member.teamId);
    if (grabTeam) {
      const updatedMember = { ...member, year: grabTeam.year };
      return membersByYear.push(updatedMember);
    }
  });

  membersByYear.sort((a, b) => Number(a?.year) - Number(b?.year));

  const incompleteMembers = members.filter((member) => member.teamId === '');

  const allMembers = incompleteMembers.concat(membersByYear);
  return allMembers;
};
