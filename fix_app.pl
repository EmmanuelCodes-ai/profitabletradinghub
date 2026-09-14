#!/usr/bin/perl
use strict;
use warnings;

local $/;
open my $fh, '<', 'src/App.tsx' or die $!;
my $content = <$fh>;
close $fh;

# Fix the specific broken code snippet
$content =~ s/          <CoursePurposeSection \n             onOpenModal={setActiveModal} \n             onSelectNavTab={setActiveNavTab}\n          \/>\n          <LearningSolutionsSection \/>\n          \{\/\*\n            onOpenModal={setActiveModal} \n             onSelectNavTab={setActiveNavTab}\n          \/>/          <CoursePurposeSection \n             onOpenModal={setActiveModal} \n             onSelectNavTab={setActiveNavTab}\n          \/>\n          <LearningSolutionsSection \/>/g;

open my $fh_out, '>', 'src/App.tsx' or die $!;
print $fh_out $content;
close $fh_out;
