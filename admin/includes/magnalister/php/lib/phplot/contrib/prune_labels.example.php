<?php
# PHPlot / contrib / prune_labels : Example
# $Id: prune_labels.example.php 439 2010-10-11 14:42:53Z derpapst $
# This produces 250 data points with date-formatted labels, and sets
# a max of 20 labels to display.

require_once 'phplot.php';
require_once 'prune_labels.php';

$base = mktime(12, 0, 0, 1, 1, 2000);
$data = array();
for ($i = 0; $i < 250; $i++) {
    $data[] = array(86400 * $i + $base, $i, $i * 0.20);
}

# Show no more than 20 labels:
prune_labels($data, 20);

$p = new PHPlot(800, 600);
$p->SetTitle('Example - pruned data labels');
$p->SetDataType('data-data');
$p->SetDataValues($data);
$p->SetXLabelType('time', '%Y-%m-%d');
$p->SetXLabelAngle(90);
$p->SetXDataLabelPos('plotdown');
$p->SetXTickLabelPos('none');
$p->SetXTickPos('none');
$p->SetDrawXGrid(False);
$p->SetDrawYGrid(False);
$p->SetPlotType('lines');
$p->DrawGraph();
