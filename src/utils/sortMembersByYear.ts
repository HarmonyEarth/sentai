import { Member, Team } from '../models/team';

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

  membersByYear.sort((a, b) => Number(a?.year) || 1 - Number(b?.year) || 2);

  const incompleteMembers = members.filter((member) => member.teamId === '');

  const allMembers = incompleteMembers.concat(membersByYear);
  return allMembers;
};
