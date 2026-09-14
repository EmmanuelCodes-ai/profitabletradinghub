#!/usr/bin/perl
use strict;
use warnings;

local $/;
open my $fh, '<', 'src/components/CoursePurposeSection.tsx' or die $!;
my $content = <$fh>;
close $fh;

$content =~ s/      <\/div>\n    <\/section>\n  \);\n};/    <\/section>\n  \);\n};/g;

open my $fh_out, '>', 'src/components/CoursePurposeSection.tsx' or die $!;
print $fh_out $content;
close $fh_out;
